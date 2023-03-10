export default function BlogPosts({ html, state }) {
  const { store } = state
  const { posts = [], offset, limit } = store

  const cards = posts
    .slice(offset, offset + limit)
    .map((o, i) => `<blog-card key="${i + offset}">post</blog-card>`)
    .join('')

  return html`
      <style>
        section {
          max-width: 60rem;
          color: var(--dark);
        }
      </style>
      <section class="m-auto pt0 pb0 pt2-sm pb2-sm pt4-md pb4-md grid gap2">
        ${cards}
      </section>
    `
}
