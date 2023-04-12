import { dirname, join } from 'node:path'
import url from 'node:url'
import { readFileSync } from 'node:fs'

/** @type {import('@enhance/types').EnhanceApiFn} */
export async function get(req) {
  const here = dirname(url.fileURLToPath(import.meta.url))
  const base = join(here, 'posts.json')
  const posts = JSON.parse(readFileSync(base, 'utf-8'))
    .reverse()

  const hCardPath = join(here, 'h-card.json')
  const hCard = JSON.parse(readFileSync(hCardPath, 'utf-8'))

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
