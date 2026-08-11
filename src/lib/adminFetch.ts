'use client';

export class AdminSessionExpiredError extends Error {
  constructor() {
    super('Your session has expired. Please log in again.');
    this.name = 'AdminSessionExpiredError';
  }
}

/**
 * Wraps fetch() for admin API calls. On a 401 (session expired or not yet
 * logged in), redirects to /admin/login with a callbackUrl instead of
 * leaving the caller stuck on a dead-end "Unauthorized" error.
 */
export async function adminFetch(input: string, init?: RequestInit): Promise<Response> {
  const res = await fetch(input, init);

  if (res.status === 401 && typeof window !== 'undefined') {
    const callbackUrl = window.location.pathname + window.location.search;
    window.location.href = `/admin/login?callbackUrl=${encodeURIComponent(callbackUrl)}`;
    throw new AdminSessionExpiredError();
  }

  return res;
}
