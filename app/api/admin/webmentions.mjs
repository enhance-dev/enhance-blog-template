import { getWebMention, upsertWebMention } from '../../../shared/webmentions.mjs'

/** @type {import('@enhance/types').EnhanceApiFn} */
export async function post({ method, path, session, body }) {
  console.log(`<${Date.now()}> ${method} ${path}`)

  const authorized = !!(session.authorized)
  if (!authorized) return { location: '/' }

  const { key, approved } = body
  const mention = await getWebMention(key)
  mention.approved = approved === 'true'

  // verify it if you'd like:
  // const mention = await webmentions.get({ id })

  await upsertWebMention(mention)

  return { location: '/admin' }
}
