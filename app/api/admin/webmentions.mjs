import { getWebMention, upsertWebMention } from '../../../shared/webmentions.mjs'

/** @type {import('@enhance/types').EnhanceApiFn} */
export async function post({ session, body }) {
  const authorized = !!(session.authorized)
  if (!authorized) return { location: '/' }

  const { key, approved } = body
  const mention = await getWebMention(key)
  mention.approved = approved === 'true'

  await upsertWebMention(mention)

  return { location: '/admin' }
}
