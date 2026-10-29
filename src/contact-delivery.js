// Use standard HTML form navigation: cross-origin submission does not require
// JavaScript to read a CORS response. The provider displays the actual result.
export function submitInquiry(payload) {
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
