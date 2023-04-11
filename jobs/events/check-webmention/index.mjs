import arc from "@architect/functions"
import { upsertPost } from "@architect/shared/posts.mjs"
import * as cheerio from 'cheerio'

export const handler = arc.events.subscribe(async (event) => {
  const { link, content } = event
  console.log('check-webmention', link)

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
