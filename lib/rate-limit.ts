const WINDOW_MS = 60 * 60 * 1000;
const MAX_REQUESTS = 5;

const hits = new Map<string, number[]>();

export function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const windowStart = now - WINDOW_MS;
  const existing = (hits.get(ip) ?? []).filter((t) => t > windowStart);

  if (existing.length >= MAX_REQUESTS) {
    hits.set(ip, existing);
    return false;
  }

  existing.push(now);
  hits.set(ip, existing);
  return true;
}
