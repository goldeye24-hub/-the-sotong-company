// Show the familiar brief confirmation at the top without leaving the current page.
let inquiryToastTimer;
function showInquiryToast(message) {
  let toast = document.getElementById('sotong-inquiry-toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'sotong-inquiry-toast';
    toast.setAttribute('role', 'status');
    toast.setAttribute('aria-live', 'polite');
    toast.style.cssText = [
      'position:fixed', 'top:20px', 'left:50%', 'transform:translateX(-50%)',
      'z-index:99999', 'box-sizing:border-box', 'max-width:calc(100vw - 32px)',
      'padding:12px 20px', 'border:1px solid #a7f3d0', 'border-radius:12px',
      'background:white', 'box-shadow:0 12px 40px rgba(15,23,42,.18)',
      'font:600 14px/1.5 system-ui,-apple-system,Arial,sans-serif',
      'color:#1e293b', 'text-align:center'
    ].join(';');
    document.body.appendChild(toast);
  }
  clearTimeout(inquiryToastTimer);
  toast.textContent = '✓  ' + message;
  toast.hidden = false;
  inquiryToastTimer = setTimeout(() => { toast.hidden = true; }, 4500);
}

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('[data-inquiry-form]').forEach((form) => {
    const firstDate = form.querySelector('[name="schedule_first"]');
    const secondDate = form.querySelector('[name="schedule_second"]');
    const flexible = form.querySelector('[name="schedule_flexible"]');
    const status = form.querySelector('.form-status') || document.createElement('p');
    if (!status.parentElement) {
      status.className = 'form-status';
      status.setAttribute('role', 'status');
      status.setAttribute('aria-live', 'polite');
      form.appendChild(status);
    }

    const syncScheduleRules = () => {
      if (firstDate) firstDate.required = !flexible?.checked;
      if (secondDate) secondDate.min = firstDate?.value || '';
    };
    firstDate?.addEventListener('change', syncScheduleRules);
    flexible?.addEventListener('change', syncScheduleRules);
    syncScheduleRules();

    const setStatus = (message, kind) => {
      status.textContent = message;
      status.dataset.state = kind;
      status.style.color = kind === 'success' ? '#047857' : kind === 'error' ? '#be123c' : '#475569';
    };

    form.addEventListener('submit', async (event) => {
      event.preventDefault();
      syncScheduleRules();
      if (!form.reportValidity()) return;

      const button = form.querySelector('button[type="submit"]');
      if (!button || button.disabled) return;
      const original = button.textContent;
      button.disabled = true;
      button.textContent = '접수 중...';
      setStatus('문의 내용을 전송하고 있습니다.', 'pending');

      const data = Object.fromEntries(new FormData(form).entries());
      const scheduleFlexible = flexible?.checked;
      data.schedule_first = data.schedule_first || '미정';
      data.schedule_second = data.schedule_second || '미입력';
      data.schedule_flexible = scheduleFlexible ? '협의 가능' : '해당 없음';
      data.schedule = scheduleFlexible
        ? `1순위 ${data.schedule_first} / 2순위 ${data.schedule_second} / 일정 협의 가능`
        : `1순위 ${data.schedule_first} / 2순위 ${data.schedule_second}`;

      try {
        const configResponse = await fetch('/api/contact', {
          headers: { Accept: 'application/json' },
          cache: 'no-store',
        });
        if (!configResponse.ok) throw new Error('문의 접수 설정 오류');
        const config = await configResponse.json();
        if (!config.formKey) throw new Error('문의 접수 설정 오류');

        const payload = new FormData(form);
        payload.set('access_key', config.formKey);
        payload.set('subject', `[더소통컴퍼니 ${data.education_field || '교육'} 문의] ${data.company || data.manager || '홈페이지 문의'}`);
        payload.set('from_name', '더소통컴퍼니 홈페이지');
        payload.set('name', data.manager || data.company || '교육 문의');
        payload.set('replyto', data.email || '');
        payload.set('page_source', location.pathname);
        payload.set('schedule_first', data.schedule_first);
        payload.set('schedule_second', data.schedule_second);
        payload.set('schedule_flexible', data.schedule_flexible);
        payload.set('schedule', data.schedule);
        payload.set('lecture_duration', data.lecture_duration || '미입력');
        payload.set('lecture_time_window', data.lecture_time_window || '미입력');

        const { submitInquiry } = await import('/programs/contact-delivery.js');
        await submitInquiry(payload);
        form.reset();
        const preset = form.dataset.preset;
        if (preset) {
          const field = form.querySelector('[name="education_field"]');
          if (field) field.value = preset;
        }
        syncScheduleRules();
        setStatus('', 'success');
        showInquiryToast('문의가 접수되었습니다. 확인 후 연락드리겠습니다.');
      } catch (error) {
        console.error('Inquiry confirmation failed', error instanceof Error ? error.message : error);
        const { inquiryErrorMessage } = await import('/programs/contact-delivery.js');
        setStatus(inquiryErrorMessage(error), 'error');
      } finally {
        button.disabled = false;
        button.textContent = original;
      }
    });
  });
});
