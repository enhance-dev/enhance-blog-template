import { getWebMentions } from '../../../shared/webmentions.mjs'

/** @type {import('@enhance/types').EnhanceApiFn} */
export async function get({ method, path, session }) {
  console.log(`<${Date.now()}> ${method} ${path}`)

  const authorized = !!(session.authorized)
  if (!authorized) return { location: '/login' }

  console.log(authorized)

  const mentions = await getWebMentions()

  console.log(mentions)

  return {
    json: { authorized, mentions }
  }
}
