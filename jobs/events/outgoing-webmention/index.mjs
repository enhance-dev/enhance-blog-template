import arc from "@architect/functions"
import * as cheerio from 'cheerio'
import li from 'li'

async function getWebmentionUrl(targetUrl) {
  let webmention = null
  const targetRes = await fetch(targetUrl.href)
  if (targetRes.ok) {
    const linkHeader = targetRes.headers.has('links') ? targetRes.headers.get('links') : targetRes.headers.get('Links')
    if (linkHeader) {
      const links = li.parse(linkHeader)
      webmention = links.webmention || links['http://webmention.org/']
      if (webmention) {
        return webmention
      }
    }

    const text = await targetRes.text()
    const $ = cheerio.load(text)
    let found = false
    $('link').each((idx, el) => {
      if (!found && el?.attribs?.rel === 'webmention' && el?.attribs?.href) {
        webmention = el.attribs.href
        found = true
      }
    })
  }
  return webmention
}

export const handler = arc.events.subscribe(async (event) => {
  const { target } = event
  // Check for web mention url at remote site
  const webmentionUrl = await getWebmentionUrl(new URL(target))

  // if the remote site accepts webmentions, send
  if (webmentionUrl) {
    const response = await fetch(webmentionUrl, {
      method: 'POST',
      body: new URLSearchParams(event),
    })

    let message = `<${webmentionUrl}>: `
    if (response.ok) {
      const contentType = response.headers.get('content-type')
      message += contentType?.startsWith('application/json')
        ? await response.json()
        : await response.text()
    } else {
      message += `Error ${response.status}: ${response.statusText}`
    }

    console.log(message)
  }

  return
})
