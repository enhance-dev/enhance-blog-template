import arc from "@architect/functions"

/** @type {import('@enhance/types').EnhanceApiFn} */
export async function post({ body }) {
  const { target, source } = body

  // validate incoming webmention
  const errors = []
  if (!target) {
    errors.push('missing_target')
  } else if (!target.startsWith('http')) {
    errors.push('invalid_target')
  }
  if (!source) {
    errors.push('missing_source')
  } else if (!source.startsWith('http')) {
    errors.push('invalid_source')
  }
  if (target && source && target === source) {
    errors.push('invalid: source must not match target')
  }

  if (errors.length > 0) {
    console.log(`Discovered ${errors.length} errors, returning 400:`, errors)
    return {
      code: 400,
      json: { errors },
    }
  }

  // publish event to store incoming webmention
  await arc.events.publish({
    name: 'incoming-webmention',
    payload: { source, target },
  })

  return {
    code: 202,
    text: 'accepted',
  }
}

export async function get() {
  return {
    code: 405,
    text: 'plz send POST',
  }
}

