document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('[data-inquiry-form]').forEach((form) => {
    const firstDate = form.querySelector('[name="schedule_first"]');
    const secondDate = form.querySelector('[name="schedule_second"]');
    const flexible = form.querySelector('[name="schedule_flexible"]');

    const syncScheduleRules = () => {
      if (firstDate) firstDate.required = !flexible?.checked;
      if (secondDate) secondDate.min = firstDate?.value || '';
    };

    firstDate?.addEventListener('change', syncScheduleRules);
    flexible?.addEventListener('change', syncScheduleRules);
    syncScheduleRules();

    form.addEventListener('submit', async (event) => {
      event.preventDefault();
      syncScheduleRules();
      if (!form.reportValidity()) return;

      const button = form.querySelector('button[type="submit"]');
      const original = button.textContent;
      button.disabled = true;
      button.textContent = '접수 중...';

      const data = Object.fromEntries(new FormData(form).entries());
      const scheduleFlexible = flexible?.checked;
      data.schedule_first = data.schedule_first || '미정';
      data.schedule_second = data.schedule_second || '미입력';
      data.schedule_flexible = scheduleFlexible ? '협의 가능' : '해당 없음';
      data.schedule = scheduleFlexible
        ? `1순위 ${data.schedule_first} / 2순위 ${data.schedule_second} / 일정 협의 가능`
        : `1순위 ${data.schedule_first} / 2순위 ${data.schedule_second}`;

      try {
        const response = await fetch('/api/contact', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify({
            subject: `[더소통컴퍼니 ${data.education_field || '교육'} 문의] ${data.company || data.manager || '홈페이지 문의'}`,
            from_name: '더소통컴퍼니 홈페이지',
            replyto: data.email,
            page_source: location.pathname,
            ...data,
          }),
        });
        const result = await response.json();
        if (!response.ok || !result.success) throw new Error(result.message || '문의 전송 실패');
        alert('문의가 정상 접수되었습니다.');
        form.reset();
        const preset = form.dataset.preset;
        if (preset) {
          const field = form.querySelector('[name="education_field"]');
          if (field) field.value = preset;
        }
        syncScheduleRules();
      } catch (error) {
        console.error(error);
        alert('문의 접수 중 오류가 발생했습니다. 잠시 후 다시 시도해주세요.');
      } finally {
        button.disabled = false;
        button.textContent = original;
      }
    });
  });
});
