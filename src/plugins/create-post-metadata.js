if (!process.env.ARC_ENV) {
  process.env.ARC_ENV = 'testing'
}
const matter = require('gray-matter');
const { join, parse } = require('path') // eslint-disable-line
const base = join(__dirname, '..', '..', 'app', 'blog', 'posts')

async function generate () {
  const { readdir, readFile, writeFile } = require('fs/promises') // eslint-disable-line
  const readingTime = require('reading-time') // eslint-disable-line

  const posts = await readdir(base)

  async function render (path) {
    const file = await readFile(join(base, path), 'utf8')
    const result = matter(file)
    result.data.readtime = `${Math.floor(readingTime(file).minutes)} mins`
    return result.data
  }

  async function getData (filePath) {
    const frontmatter = await render(filePath)
    // frontmatter.image = frontmatter.image
    frontmatter.thumbnail = frontmatter.image.replace('/_public/blog', '/_public/blog/thumbnails')
    return {
      href: `/posts/${parse(filePath).name}`,
      frontmatter
    }
  }

  const cards = []
  for (let path of posts) {
    let card = await getData(path)
    cards.push(card)
  }

  let postsJson = join(__dirname, '..', '..', 'app', 'api', 'posts.json')
  await writeFile(postsJson, JSON.stringify(cards, null, 2))
}

module.exports = {
  sandbox: {
    start: generate,
    watcher: async (params) => {
      let { filename } = params
      if (!filename.includes(base) || !filename.endsWith('.md')) {
        return
      }
      await generate(params)
    }
  }
}

if (require.main === module) {
  (async function () {
    try {
      generate()
    }
    catch (err) {
      console.log(err)
    }
  })()
}
