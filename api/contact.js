const MAX_FIELD_LENGTH = 4000;

function clean(value) {
  return typeof value === 'string' ? value.trim().slice(0, MAX_FIELD_LENGTH) : '';
}

export default async function handler(request, response) {
  if (request.method !== 'POST') {
    response.setHeader('Allow', 'POST');
    return response.status(405).json({ success: false, message: 'Method not allowed' });
  }

  const accessKey = process.env.WEB3FORMS_ACCESS_KEY;
  if (!accessKey) {
    console.error('WEB3FORMS_ACCESS_KEY is not configured');
    return response.status(500).json({ success: false, message: '문의 전송 설정 오류' });
  }

  const body = request.body || {};
  const company = clean(body.company);
  const manager = clean(body.manager);
  const phone = clean(body.phone);
  const email = clean(body.email);
  const message = clean(body.message);

  if (!company || !manager || !phone || !email || !message) {
    return response.status(400).json({ success: false, message: '필수 항목을 확인해주세요.' });
  }

  const payload = {
    access_key: accessKey,
    subject: clean(body.subject) || `[더소통컴퍼니 교육문의] ${company}`,
    from_name: '더소통컴퍼니 홈페이지',
    replyto: email,
    company,
    manager,
    phone,
    email,
    field: clean(body.field || body.education_field),
    education_field: clean(body.education_field || body.field),
    people: clean(body.people),
    location: clean(body.location),
    schedule_first: clean(body.schedule_first),
    schedule_second: clean(body.schedule_second),
    schedule_flexible: clean(body.schedule_flexible),
    schedule: clean(body.schedule),
    budget_min: clean(body.budget_min),
    budget_max: clean(body.budget_max),
    message,
    page_source: clean(body.page_source),
  };

  try {
    const upstream = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify(payload),
    });
    const result = await upstream.json();
    if (!upstream.ok || !result.success) {
      console.error('Web3Forms error', result.message || upstream.status);
      return response.status(502).json({ success: false, message: '문의 전송 실패' });
    }
    return response.status(200).json({ success: true });
  } catch (error) {
    console.error('Contact API error', error);
    return response.status(502).json({ success: false, message: '문의 전송 실패' });
  }
}
