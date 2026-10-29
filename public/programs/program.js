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
        const configResponse = await fetch('/api/contact', {
          headers: { Accept: 'application/json' },
          cache: 'no-store',
        });
        const config = await configResponse.json();
        if (!configResponse.ok || !config.formKey) throw new Error('문의 전송 설정 오류');

        // Web3Forms free forms accept browser submissions. FormData avoids a JSON
        // CORS preflight; do not proxy submission via a Vercel server function.
        const payload = new FormData(form);
        payload.set('access_key', config.formKey);
        payload.set('name', data.manager || data.company || '교육 문의');
        payload.set('subject', `[더소통컴퍼니 ${data.education_field || '교육'} 문의] ${data.company || data.manager || '홈페이지 문의'}`);
        payload.set('from_name', '더소통컴퍼니 홈페이지');
        payload.set('replyto', data.email || '');
        payload.set('page_source', location.pathname);
        payload.set('schedule_first', data.schedule_first);
        payload.set('schedule_second', data.schedule_second);
        payload.set('schedule_flexible', data.schedule_flexible);
        payload.set('schedule', data.schedule);
        payload.set('lecture_duration', data.lecture_duration || '미입력');
        payload.set('lecture_time_window', data.lecture_time_window || '미입력');

        const response = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: { Accept: 'application/json' },
          body: payload,
        });
        const result = await response.json().catch(() => null);
        if (!response.ok || result?.success !== true) {
          throw new Error(`문의 전송 실패 (HTTP ${response.status})`);
        }
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
        alert('문의 전송이 완료되지 않았습니다. 입력 내용은 유지됩니다. 다시 시도하거나 이메일 konemi@naver.com / 전화 010-5007-2314로 문의해 주세요.');
      } finally {
        button.disabled = false;
        button.textContent = original;
      }
    });
  });
});
