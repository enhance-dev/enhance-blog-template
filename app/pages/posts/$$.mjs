/** @type {import('@enhance/types').EnhanceElemFn} */
export default function ({ html, state }) {
  const { store } = state
  const { post, mentions } = store
  const { frontmatter } = post
  const { description = '', published = '', title = '' } = frontmatter

  return html`
      <site-layout>
        <article class="h-entry font-body leading4 m-auto pt0 pb0 pt4-lg pb4-lg">
          <h1 class="p-name font-heading font-bold mb0 mb4-lg text3 text5-lg tracking-1 leading1 text-center">${title}</h1>
          <p class='dt-published text-center mb0 mb4-lg'>${published}</p>
          <section slot="e-content doc">${post.html}</section>
          <section class="p-summary hidden">${description}</section>
          <h-card class="hidden"></h-card>
        </article>
        ${mentions?.length ? '<webmentions-list></webmentions-list>' : ''}
      </site-layout>
  `
}
