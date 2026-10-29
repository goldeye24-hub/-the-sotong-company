// Native POST avoids reading a cross-origin fetch response. Only the provider's
// success redirect to our receipt bridge can acknowledge the pending submission.
export function submitInquiry(payload) {
  return new Promise((resolve, reject) => {
    const token = crypto.randomUUID();
    const frame = document.createElement('iframe');
    frame.name = `contact-${token}`;
    frame.hidden = true;
    frame.title = '문의 접수 처리';
    const form = document.createElement('form');
    form.method = 'POST';
    form.action = 'https://api.web3forms.com/submit';
    form.target = frame.name;
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
      form.remove(); frame.remove();
    };
    const onReceipt = (event) => {
      if (event.origin !== window.location.origin || event.source !== frame.contentWindow ||
          event.data?.type !== 'contact-received' || event.data?.receipt !== token) return;
      cleanup(); resolve();
    };
    window.addEventListener('message', onReceipt);
    document.body.append(frame, form);
    timer = setTimeout(() => { cleanup(); reject(new Error('CONTACT-UNCONFIRMED')); }, 60000);
    try { HTMLFormElement.prototype.submit.call(form); }
    catch (error) { cleanup(); reject(error); }
  });
}
export function inquiryErrorMessage() {
  return '접수 완료 여부를 확인하지 못했습니다. 입력 내용은 유지됩니다. 중복 전송하지 마시고 이메일 konemi@naver.com 또는 전화 010-5007-2314로 확인해 주세요.';
}
