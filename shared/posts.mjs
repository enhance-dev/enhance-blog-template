import data from '@begin/data'

const deletePost = async function (key) {
  await data.destroy({ table: 'posts', key })
  return { key }
}

const upsertPost = async function (post) {
  return data.set({ table: 'posts', ...post })
}

const getPost = async function (key) {
  return data.get({ table: 'posts', key })
}

const getPosts = async function () {
  const databasePageResults = await data.page({
    table: 'posts',
    limit: 25
  })

  let posts = []
  for await (let databasePageResult of databasePageResults) {
    for (let post of databasePageResult) {
      delete post.table
      posts.push(post)
    }
  }

  return posts
}

export {
  deletePost,
  getPost,
  getPosts,
  upsertPost
}
