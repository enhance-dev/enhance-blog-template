import arc from "@architect/functions"
import { upsertPost } from "@architect/shared/posts.mjs"
import * as cheerio from 'cheerio'

export const handler = arc.events.subscribe(async (event) => {
  const { link, content } = event

  // Check to see if any of our outgoing links are to sites
  // that accept web mentions
  const $ = cheerio.load(content)
  $('a').each(async (idx, el) => {
    const target = el?.attribs?.href
    if (target?.startsWith('http')) {
      await arc.events.publish({
        name: 'outgoing-webmention',
        payload: {
          source: link,
          target
        },
      })
    }
  })

  // We've processed this post so never look at it again
  await upsertPost({ link })

  return
})
