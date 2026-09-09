// Security and anti-bot utilities shared across GoDats forms.
//
// IMPORTANT: everything in this file runs in the browser and is a UX/hygiene
// layer only — it is trivially bypassed by anyone who calls the API directly
// (curl, a script, Burp, etc.). It must never be treated as the security
// boundary. The API must independently validate and (re-)sanitize every
// field, and must HTML-escape any of this data before ever rendering it
// (e.g. in an admin dashboard or an email template).

// Strip HTML tags and dangerous URL schemes from plain-text fields (name,
// message, company, etc.) so a copy-pasted or bot-submitted payload doesn't
// carry markup. These fields are never meant to contain HTML, so we strip
// all tags rather than trying to blacklist specific ones.
export function sanitizeInput(input) {
  if (typeof input !== 'string') return input
  return input
    .replace(/<[^>]*>/g, '')
    .replace(/\b(javascript|data|vbscript):/gi, '')
    .replace(/on\w+\s*=\s*(?:"[^"]*"|'[^']*'|[^\s>]+)/gi, '')
    .trim()
}

// Validate email format strictly
export function isValidEmail(email) {
  if (!email || typeof email !== 'string') return false
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
  return emailRegex.test(email.trim()) && email.length <= 150
}

// Per-tab submission cooldown using sessionStorage. This only deters casual
// double-clicks/resubmits in the same browser tab — it resets in a private
// window or a different tab/session and does nothing against a script
// posting straight to the API, so real rate limiting must live server-side.
export function checkRateLimit(actionKey = 'lead_form_submit', cooldownMs = 10000) {
  try {
    const lastSubmit = sessionStorage.getItem(`last_${actionKey}`)
    const now = Date.now()
    if (lastSubmit && now - parseInt(lastSubmit, 10) < cooldownMs) {
      const remainingSeconds = Math.ceil((cooldownMs - (now - parseInt(lastSubmit, 10))) / 1000)
      return { allowed: false, remainingSeconds }
    }
    sessionStorage.setItem(`last_${actionKey}`, now.toString())
    return { allowed: true, remainingSeconds: 0 }
  } catch {
    return { allowed: true, remainingSeconds: 0 }
  }
}
