import { dirname, join } from 'path'
import url from 'url'
import { readFileSync } from 'fs'

/** @type {import('@enhance/types').EnhanceApiFn} */
export async function get() {
  let here = dirname(url.fileURLToPath(import.meta.url))
  let hCardPath = join(here, 'h-card.json')
  let hCard = JSON.parse(readFileSync(hCardPath, 'utf-8'))

  return {
    json: {
      hCard,
    },
  }
}
