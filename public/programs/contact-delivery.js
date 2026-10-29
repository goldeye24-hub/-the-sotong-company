// Use standard HTML form navigation: cross-origin submission does not require
// JavaScript to read a CORS response. The provider displays the actual result.
export function submitInquiry(payload) {
  const returnUrl = new URL(window.location.pathname, window.location.origin);
  returnUrl.searchParams.set('inquiry', 'received');
  returnUrl.hash = window.location.pathname === '/' ? '교육문의' : 'inquiry';
  payload.set('redirect', returnUrl.href);
  const form = document.createElement('form');
  form.method = 'POST';
  form.action = 'https://api.web3forms.com/submit';
  form.acceptCharset = 'UTF-8';
  form.style.display = 'none';
  for (const [name, value] of payload.entries()) {
    if (typeof value !== 'string') continue;
    const input = document.createElement('input');
    input.type = 'hidden';
    input.name = name;
    input.value = value;
    form.appendChild(input);
  }
  document.body.appendChild(form);
  HTMLFormElement.prototype.submit.call(form);
  // Never display success or clear fields before the provider confirms receipt.
  return new Promise(() => {});
}
export function inquiryErrorMessage() {
  return '문의 전송을 시작하지 못했습니다. 입력 내용은 유지됩니다. 이메일 konemi@naver.com 또는 전화 010-5007-2314로 문의해 주세요.';
}

function showReceipt() {
  const url = new URL(window.location.href);
  if (url.searchParams.get('inquiry') !== 'received') return;
  url.searchParams.delete('inquiry');
  window.history.replaceState(null, '', url.pathname + url.search + url.hash);
  const notice = document.createElement('div');
  notice.setAttribute('role', 'status');
  notice.style.cssText = 'position:fixed;top:24px;left:50%;transform:translateX(-50%);z-index:9999;background:#fff;color:#0f172a;border:1px solid #cbd5e1;border-radius:16px;padding:20px 24px;box-shadow:0 12px 36px #0f172a26;width:min(90vw,420px);font:16px/1.6 sans-serif';
  const text = document.createElement('p');
  text.textContent = '문의가 접수되었습니다. 확인 후 연락드리겠습니다.';
  const close = document.createElement('button');
  close.type = 'button';
  close.textContent = '확인';
  close.style.cssText = 'display:block;margin:12px 0 0 auto;padding:8px 20px;background:#1e3a8a;color:white;border:0;border-radius:8px;cursor:pointer';
  close.addEventListener('click', () => notice.remove());
  notice.append(text, close);
  document.body.appendChild(notice);
}
if (typeof window !== 'undefined') {
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', showReceipt, { once: true });
  else showReceipt();
}
