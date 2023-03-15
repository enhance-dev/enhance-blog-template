const { join, extname } = require('path') // eslint-disable-line
const { brotliCompressSync } = require('zlib')
const base = join(__dirname, '..', '..', 'app', 'blog', 'posts')

function getHostname(hostname) {
  if ( hostname ) {
    return hostname
  }
  return 'http://localhost:3333'
}

async function generate () {
  const { readdir, readFile, writeFile } = require('fs/promises') // eslint-disable-line
  const { Feed } = await import('feed')
  const { Arcdown } = await import('arcdown')

  const arcdown = new Arcdown({})

  const posts = await readdir(base)

  const hostname = getHostname(process.env.BLOG_TEMPLATE_URL)

  async function render(path) {
    const file = await readFile(`${base}/${path}`, 'utf8')
    let result = await arcdown.render(file)
    return { content: result.html, frontmatter: result.frontmatter }
  }

  async function getData(pathName) {
    const { content, frontmatter } = await render(pathName)
    const filename = pathName.substring(
      0,
      pathName.length - extname(pathName).length
    )
    return {
      href: `${filename}`,
      content,
      frontmatter,
    }
  }

  const items = (
      await Promise.all( // eslint-disable-line
      posts
        .sort((a, b) => (a.post < b.post ? 1 : -1))
        .map(async (post) => await getData(post))
    ).catch(function(err) {
      console.log(err.message); // some coding error in handling happened
    })
  )

  const feed = new Feed({
    title: 'My Blog Title',
    description: "My blog description.",
    id: hostname,
    link: hostname,
    language: 'en',
    copyright: `All rights reserved ${new Date().getFullYear()}, My Company`,
    generator: hostname + ' via Feed for Node.js',
    author: {
      name: 'My Company',
      link: hostname,
    },
  })

  for (const post of items) {
    feed.addItem({
      title: post.frontmatter.title,
      id: `${hostname}/blog/posts/${post.href}`,
      link: `${hostname}/blog/posts/${post.href}`,
      description: post.frontmatter.description,
      content: post.content,
      author: post.frontmatter.author,
      date: new Date(post.frontmatter.published),
    })
  }

  let feedXml = feed.rss2()
  let rssFeed = join(__dirname, '..', '..', 'app', 'api', 'rss.xml')
  await writeFile(rssFeed, feedXml)
  let rssBrotli = join(__dirname, '..', '..', 'app', 'api', 'rss.br')
  await writeFile(rssBrotli, Buffer.from(brotliCompressSync(feedXml)).toString('base64'))
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
