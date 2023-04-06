import { dirname, join } from 'path'
import url from 'url'
import { readFileSync } from 'fs'

/** @type {import('@enhance/types').EnhanceApiFn} */
export async function get(req) {
  let here = dirname(url.fileURLToPath(import.meta.url))
  let base = join(here, 'posts.json')
  let posts = JSON.parse(readFileSync(base, 'utf-8'))
    .reverse()

  let hCardPath = join(here, 'h-card.json')
  let hCard = JSON.parse(readFileSync(hCardPath, 'utf-8'))

  const parsedLimit = parseInt(req.query.limit, 10)
  const limit = parsedLimit > 0 ? parsedLimit : 20
  const parsedOffset = parseInt(req.query.offset, 10)
  const offset = parsedOffset >= 0 ? parsedOffset : 0
  const total = posts.length

  return {
    json: {
      posts,
      limit,
      offset,
      total,
      hCard,
    },
  }
}
