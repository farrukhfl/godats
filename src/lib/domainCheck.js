// TODO(backend): this is a mocked/stubbed domain-availability check for
// frontend UX purposes only. A production build needs to wire this up to a
// real registrar API (e.g. Namecheap, GoDaddy Reseller, Domainr) instead.

export const CHECK_TLDS = ['com', 'net', 'io', 'info', 'shop', 'org', 'tech', 'ai', 'co']

const TLD_PRICES = {
  com: 12.99, net: 14.99, io: 34.99, info: 9.99, shop: 3.99, org: 12.99, tech: 19.99, ai: 69.99, co: 24.99,
}

function hashString(str) {
  let hash = 0
  for (let i = 0; i < str.length; i++) {
    hash = (hash << 5) - hash + str.charCodeAt(i)
    hash |= 0
  }
  return Math.abs(hash)
}

export async function checkDomainAvailability(name, tlds = CHECK_TLDS) {
  await new Promise((resolve) => setTimeout(resolve, 600 + Math.random() * 500))

  const clean = name.trim().toLowerCase().replace(/[^a-z0-9-]/g, '')
  return tlds.map((tld) => {
    // Deterministic per name+tld so re-searching the same name gives a
    // consistent (not flickering) result within a session.
    const seed = hashString(`${clean}.${tld}`)
    return {
      tld,
      domain: `${clean}.${tld}`,
      available: seed % 5 !== 0,
      price: TLD_PRICES[tld],
    }
  })
}
