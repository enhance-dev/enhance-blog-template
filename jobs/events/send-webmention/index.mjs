import arc from "@architect/functions"
import * as cheerio from 'cheerio'

async function getWebmentionUrl(targetUrl) {
  let webmention = null
  const targetReq = await fetch(targetUrl.href)
  if (targetReq.ok) {
    // TODO: check link headers
    // console.log(targetReq.headers)

    const text = await targetReq.text()
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
  const webmentionUrl = await getWebmentionUrl(new URL(target))

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
