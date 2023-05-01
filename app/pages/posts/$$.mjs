/** @type {import('@enhance/types').EnhanceElemFn} */
export default function ({ html, state }) {
  const { store } = state
  const { post, mentions } = store
  const { frontmatter } = post
  const { description = '', published = '', title = '' } = frontmatter

  return html`
      <style>
        h1, .date {
          text-align: var(--align-heading);
        }
      </style>
      <site-layout>
        <article class="h-entry font-body leading4 m-auto pt0 pb0 pt4-lg pb4-lg">
          <h1 class="p-name font-heading font-bold mb0 mb4-lg text3 text5-lg tracking-1 leading1">${title}</h1>
          <p class='date dt-published mb0 mb4-lg'>${published}</p>
          <section slot="e-content doc">${post.html}</section>
          <section class="p-summary hidden">${description}</section>
          <my-h-card class="hidden"></my-h-card>
        </article>
        ${mentions?.length ? '<webmentions-list></webmentions-list>' : ''}
      </site-layout>
  `
}
