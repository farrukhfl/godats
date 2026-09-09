const apiBaseUrl = (import.meta.env.VITE_API_BASE_URL || 'https://dev.godats.com').replace(/\/$/, '')

async function parseResponse(response) {
  const data = await response.json().catch(() => ({}))
  if (!response.ok) {
    const error = new Error(data.error || 'Unable to submit the form. Please try again.')
    error.details = data.details || []
    throw error
  }
  return data
}

export async function postJson(path, payload) {
  let response
  try {
    response = await fetch(`${apiBaseUrl}${path}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    })
  } catch {
    throw new Error('Unable to connect to the server. Please try again shortly.')
  }
  return parseResponse(response)
}

export async function postMultipart(path, formData) {
  let response
  try {
    response = await fetch(`${apiBaseUrl}${path}`, { method: 'POST', body: formData })
  } catch {
    throw new Error('Unable to connect to the server. Please try again shortly.')
  }
  return parseResponse(response)
}
