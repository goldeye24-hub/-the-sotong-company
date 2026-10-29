export default function handler(request, response) {
  response.setHeader('Cache-Control', 'no-store');
  if (request.method !== 'POST') return response.status(405).end();
  const allowed = ['NETWORK', 'RESPONSE', 'RATE_LIMIT', 'REJECTED', 'DELIVERY'];
  const { code, status } = request.body || {};
  if (!allowed.includes(code) || !Number.isInteger(status) || status < 0 || status > 599) return response.status(400).end();
  console.warn('Contact browser delivery failure', { code, status });
  return response.status(204).end();
}
