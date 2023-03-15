import { readFileSync } from 'fs'
import { URL } from 'url'
import { Arcdown } from 'arcdown'
import HljsLineWrapper from '../../lib/hljs-line-wrapper.mjs'
import { default as defaultClassMapping } from '../../lib/markdown-class-mappings.mjs'

/** @type {import('@enhance/types').EnhanceApiFn} */
export async function get(req) {

  // reinvoked each req so no weird regexp caching
  const arcdown = new Arcdown({
    pluginOverrides: {
      markdownItToc: {
        containerClass: 'toc mb2 ml-2',
        listType: 'ul',
      },
      markdownItClass: defaultClassMapping,
    },
    hljs: {
      sublanguages: { javascript: ['xml', 'css'] },
      plugins: [new HljsLineWrapper({ className: 'code-line' })],
    },
  })

  const { path: activePath } = req
  let docPath = activePath.replace(/^\/?blog\//, '') || 'index'
  if (docPath.endsWith('/')) {
    docPath += 'index' // trailing slash == index.md file
  }

  const docURL = new URL(`../../blog/${docPath}.md`, import.meta.url)

  console.log(docURL)

  let docMarkdown
  try {
    docMarkdown = readFileSync(docURL.pathname, 'utf-8')
  } catch (_err) {
    console.log(_err)
    return { statusCode: 404 }
  }
  const post = await arcdown.render(docMarkdown)

  return {
    json: {
      post
    },
  }
}
