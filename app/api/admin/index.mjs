import { getWebMentions } from '../../../shared/webmentions.mjs'

/** @type {import('@enhance/types').EnhanceApiFn} */
export async function get({ session }) {
  const authorized = !!(session.authorized)
  if (!authorized) return { location: '/login' }

  const mentions = await getWebMentions()

  return {
    json: { authorized, mentions }
  }
}
