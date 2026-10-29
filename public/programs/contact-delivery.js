// Only delivery metadata is recorded; never include inquiry fields or form keys.
export async function submitInquiry(payload) {
  let status = 0;
  let code = 'NETWORK';
  try {
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST', headers: { Accept: 'application/json' }, body: payload,
    });
    status = response.status;
    const result = await response.json().catch(() => null);
    if (response.ok && result?.success === true) return;
    code = !result ? 'RESPONSE' : status === 429 ? 'RATE_LIMIT' : status === 403 ? 'REJECTED' : 'DELIVERY';
  } catch {
    // A network error does not prove the provider failed to receive the request.
  }
  const reference = `CONTACT-${code}-${status}`;
  fetch('/api/contact-diagnostic', {
    method: 'POST', headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ code, status }), keepalive: true,
  }).catch(() => {});
  throw new Error(reference);
}
export function inquiryErrorMessage(error) {
  const reference = /^CONTACT-[A-Z_]+-\d+$/.test(error?.message || '') ? error.message : 'CONTACT-CONFIG-0';
  return `접수 완료 여부를 확인하지 못했습니다. 입력 내용은 유지됩니다.\n확인코드: ${reference}\n중복 접수 방지를 위해 반복 전송하지 마시고 이메일 konemi@naver.com 또는 전화 010-5007-2314로 확인해 주세요.`;
}
