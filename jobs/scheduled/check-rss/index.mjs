import arc from "@architect/functions"
import { getPosts } from "@architect/shared/posts.mjs"
import { parseStringPromise } from "xml2js"

export async function handler () {
  // Get processed posts
  const posts = await getPosts()

  // Read RSS feed
  const siteUrl = process.env.SITE_URL || 'http://localhost:3333'
  const rssUrl = new URL(`${siteUrl}/rss`)
  const response = await fetch(rssUrl.href)
  const text = await response.text()
  const result = await parseStringPromise(text)
  const items = result?.rss?.channel[0]?.item || []
  const filteredItems = items.filter(item => !posts.find(post => post?.link === item.link[0]))

  // Send new posts to be checked for webmentions
  // eslint-disable-next-line no-undef
  await Promise.all(filteredItems.map(async (item) => {
    await arc.events.publish({
      name: 'check-webmention',
      payload: {
        link: item.link[0],
        content: item['content:encoded'][0]
      },
    })
  }))

  return
}
