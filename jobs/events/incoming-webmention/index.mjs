import arc from "@architect/functions"
import { upsertWebMention } from "@architect/shared/webmentions.mjs"
import { mf2 } from 'microformats-parser'

export const handler = arc.events.subscribe(async (event) => {
  const { target, source } = event
  const targetUrl = new URL(target)
  const sourceUrl = new URL(source)
  const newMention = {
    id: `target:${targetUrl.pathname}::source:${sourceUrl.hostname}${sourceUrl.pathname}`,
    created: new Date().toISOString(),
    source,
    target,
    targetPath: targetUrl.pathname,
  }

  const sourceReq = await fetch(sourceUrl.href)
  if (sourceReq.ok) {
    const sourceBody = await sourceReq.text()

    // search body for target URL
    newMention.found = sourceBody.indexOf(targetUrl.href) > -1
    const { items } = mf2(sourceBody, { baseUrl: sourceUrl.href })
    newMention.items = items
    const hEntry = items.find((i) => i.type?.includes('h-entry'))

    // get author name
    if (
      hEntry?.properties?.author &&
        Array.isArray(hEntry.properties.author)
    ) {
      if (typeof hEntry.properties.author[0] === 'string') {
        newMention.sourceAuthor = hEntry.properties.author[0]
      } else if (hEntry.properties.author[0].value) {
        newMention.sourceAuthor = hEntry.properties.author[0].value
      }
    }

    // overwrite author name with h-card name if available
    if (hEntry?.children) {
      const hCard = hEntry.children.find((i) => i.type?.includes('h-card'))
      if (hCard?.properties?.name && Array.isArray(hCard.properties.name)) {
        newMention.sourceAuthor = hCard.properties.name[0]
      }
      if (hCard?.properties?.photo && Array.isArray(hCard.properties.photo)) {
        newMention.sourceAuthorImage = hCard.properties.photo[0]
      }
    }

    // get source title
    if (hEntry?.properties?.name && Array.isArray(hEntry.properties.name)) {
      newMention.sourceTitle = hEntry.properties.name[0]
    }

    // get summary
    if (hEntry?.properties?.summary && Array.isArray(hEntry.properties.summary)) {
      newMention.summary = hEntry.properties.summary[0]
    }
  } else {
    newMention.error = {
      message: `source URL ${sourceUrl.href} returned ${sourceReq.status}`,
    }
  }

  // save result
  await upsertWebMention(newMention)

  return
})
