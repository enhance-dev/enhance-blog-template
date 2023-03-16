/** @type {import('@enhance/types').EnhanceElemFn} */
export default function ({ html, state }) {
  const { store } = state
  const { post } = store
  const { frontmatter } = post
  const { published = '', title = '' } = frontmatter

  return html`
      <site-layout>
        <article class="font-body leading4 m-auto p0 p2-sm p4-md p5-lg p6-xl">
          <h1 class="font-heading font-bold mb0 mb4-lg text3 text5-lg tracking-1 leading1 text-center">${title}</h1>
          <p class='text-center mb0 mb4-lg'>${published}</p>
          <section slot="doc">${post.html}</section>
        </article>
      </site-layout>
  `
}
