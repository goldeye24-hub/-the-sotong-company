// Native POST avoids reading a cross-origin fetch response. Only the provider's
// success redirect to our receipt bridge can acknowledge the pending submission.
export function submitInquiry(payload, deliveryWindow) {
  return new Promise((resolve, reject) => {
    const token = crypto.randomUUID();
    if (!deliveryWindow || deliveryWindow.closed) { reject(new Error('CONTACT-WINDOW')); return; }
    const form = document.createElement('form');
    form.method = 'POST';
    form.action = 'https://api.web3forms.com/submit';
    form.target = deliveryWindow.name;
    form.acceptCharset = 'UTF-8';
    form.hidden = true;
    const redirect = new URL('/contact-complete.html', window.location.origin);
    redirect.searchParams.set('receipt', token);
    payload.set('redirect', redirect.href);
    for (const [name, value] of payload.entries()) {
      if (typeof value !== 'string') continue;
      const input = document.createElement('input');
      input.type = 'hidden'; input.name = name; input.value = value;
      form.appendChild(input);
    }
    let timer;
    const cleanup = () => {
      clearTimeout(timer);
      window.removeEventListener('message', onReceipt);
      form.remove();
      if (!deliveryWindow.closed) deliveryWindow.close();
    };
    const onReceipt = (event) => {
      if (event.origin !== window.location.origin || event.source !== deliveryWindow ||
          event.data?.type !== 'contact-received' || event.data?.receipt !== token) return;
      cleanup(); resolve();
    };
    window.addEventListener('message', onReceipt);
    document.body.appendChild(form);
    timer = setTimeout(() => { cleanup(); reject(new Error('CONTACT-UNCONFIRMED')); }, 60000);
    try { HTMLFormElement.prototype.submit.call(form); }
    catch (error) { cleanup(); reject(error); }
  });
}
export function inquiryErrorMessage(error) {
  if (error?.message === 'CONTACT-WINDOW') return '문의 전송 창을 열지 못했습니다. 브라우저 주소창에 팝업 차단 표시가 있는지 확인해 주세요. 문의는 전송되지 않았으며 입력 내용은 유지됩니다.';
  return '접수 완료 여부를 확인하지 못했습니다. 입력 내용은 유지됩니다. 중복 전송하지 마시고 이메일 konemi@naver.com 또는 전화 010-5007-2314로 확인해 주세요.';
}

export function openDeliveryWindow() {
  const name = `contact-${crypto.randomUUID()}`;
  const popup = window.open('/contact-pending.html', name, 'popup,width=480,height=360');
  return popup;
}
