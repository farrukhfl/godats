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

// Per-field length caps, keyed by the form field's input type. These are
// mirrored onto the inputs as `maxLength` (so paste is clamped too) and
// re-checked on submit, which keeps a bot from posting a megabyte-sized
// "message" and stops obviously junk data before it reaches the API.
// The API must enforce its own limits regardless.
const MAX_LENGTHS = {
  email: 150,
  tel: 30,
  textarea: 2000,
  select: 120,
  default: 120,
}

export function maxLengthFor(type) {
  return MAX_LENGTHS[type] ?? MAX_LENGTHS.default
}

// Soft automation signals. Every one of these is spoofable, so this is only
// ever used to *add friction* (a longer minimum dwell time before a
// submission is accepted) — never as a hard gate, because a false positive
// on a real visitor would silently lose us a lead.
export function looksAutomated() {
  try {
    if (navigator.webdriver === true) return true
    // Headless UA strings that don't bother hiding themselves.
    if (/HeadlessChrome|PhantomJS|Puppeteer|Playwright|Electron\/|slimerjs/i.test(navigator.userAgent)) return true
    // A real browser window always reports a non-zero outer size; most
    // headless drivers report 0 unless explicitly configured.
    if (window.outerWidth === 0 && window.outerHeight === 0) return true
    return false
  } catch {
    return false
  }
}

// Minimum time a form must stay open before we accept a submission. Bumped
// well past human-plausible when automation signals are present, so scripted
// fills get rejected while a real visitor never notices the difference.
const MIN_DWELL_MS = 1200
const MIN_DWELL_MS_SUSPICIOUS = 4000

export function dwellThreshold() {
  return looksAutomated() ? MIN_DWELL_MS_SUSPICIOUS : MIN_DWELL_MS
}
