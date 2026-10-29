// Keep customers on the inquiry page while submitting via a native browser form.
// The external provider may be cross-origin: only our own success redirect acknowledges receipt.
export function submitInquiry(payload) {
  return new Promise((resolve, reject) => {
    const receipt = crypto.randomUUID();
    const frame = document.createElement("iframe");
    frame.name = "sotong-inquiry-" + receipt;
    frame.title = "교육문의 전송";
    frame.setAttribute("aria-hidden", "true");
    frame.style.cssText = "position:absolute;width:1px;height:1px;opacity:0;border:0;pointer-events:none;";

    const postForm = document.createElement("form");
    postForm.method = "POST";
    postForm.action = "https://api.web3forms.com/submit";
    postForm.target = frame.name;
    postForm.acceptCharset = "UTF-8";
    postForm.hidden = true;

    const successUrl = new URL("/contact-complete.html", window.location.origin);
    successUrl.searchParams.set("receipt", receipt);
    payload.set("redirect", successUrl.href);
    for (const [name, value] of payload.entries()) {
      if (typeof value !== "string") continue;
      const input = document.createElement("input");
      input.type = "hidden";
      input.name = name;
      input.value = value;
      postForm.appendChild(input);
    }

    let timeout;
    const cleanup = () => {
      clearTimeout(timeout);
      window.removeEventListener("message", handleReceipt);
      postForm.remove();
      frame.remove();
    };
    const handleReceipt = (event) => {
      if (event.origin !== location.origin ||
          event.source !== frame.contentWindow ||
          event.data?.type !== "sotong-inquiry-received" ||
          event.data.receipt !== receipt) return;
      cleanup();
      resolve();
    };
    window.addEventListener("message", handleReceipt);
    document.body.appendChild(frame);
    document.body.appendChild(postForm);
    timeout = setTimeout(() => {
      cleanup();
      reject(new Error("DELIVERY_UNCONFIRMED"));
    }, 60000);
    try {
      HTMLFormElement.prototype.submit.call(postForm);
    } catch (error) {
      cleanup();
      reject(error);
    }
  });
}

export function inquiryErrorMessage(error) {
  if (error?.message === "DELIVERY_UNCONFIRMED") {
    return "접수 완료 여부를 확인하지 못했습니다. 입력 내용은 유지됩니다. 중복 제출하지 마시고 이메일 konemi@naver.com 또는 전화 010-5007-2314로 확인해 주세요.";
  }
  return "문의 전송을 시작하지 못했습니다. 입력 내용은 유지됩니다. 이메일 konemi@naver.com 또는 전화 010-5007-2314로 문의해 주세요.";
}
