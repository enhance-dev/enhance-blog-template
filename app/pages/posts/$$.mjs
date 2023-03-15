/** @type {import('@enhance/types').EnhanceElemFn} */
export default function ({ html, state }) {
  const { store } = state
  const { post } = store
  const { frontmatter } = post
  const { title = '' } = frontmatter

  return html`
    <link rel="stylesheet" href="/_public/css/docs-highlight.css" />

    <blog-container>
      <article
        class="font-sans text1-xl leading4 m-auto mt0 mb0 mt2-md mb2-md mt4-lg mb4-lg p0 p2-sm p4-md p5-lg p6-xl"
      >
        <h1 class="font-serif font-bold mb0 mb4-lg text3 text5-lg leading1">${title}</h1>

        <section slot="doc">${post.html}</section>
      </article>
    </blog-container>
  `
}
