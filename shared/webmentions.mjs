import data from '@begin/data'

const deleteWebMention = async function (key) {
  await data.destroy({ table: 'webmentions', key })
  return { key }
}

const upsertWebMention = async function (webmention) {
  console.log(JSON.stringify({ table: 'webmentions', ...webmention }))
  return data.set({ table: 'webmentions', ...webmention })
}

const getWebMention = async function (key) {
  return data.get({ table: 'webmentions', key })
}

const getWebMentions = async function () {
  const databasePageResults = await data.page({
    table: 'webmentions',
    limit: 25
  })

  let webmentions = []
  for await (let databasePageResult of databasePageResults) {
    for (let webmention of databasePageResult) {
      delete webmention.table
      webmentions.push(webmention)
    }
  }

  return webmentions
}

export {
  deleteWebMention,
  getWebMention,
  getWebMentions,
  upsertWebMention
}
