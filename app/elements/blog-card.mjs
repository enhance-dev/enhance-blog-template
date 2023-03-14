export default function BlogPost({ html, state }) {
  const { attrs, store } = state
  const { key } = attrs
  const { href, frontmatter } = store.posts[key]
  const { description, readtime, title } =
    frontmatter
  return html`
    <style>
      :host {
        display: block;
      }

      .avatar {
        width: 40px;
        aspect-ratio: 1 / 1;
      }
    </style>
    <a href="${href}" class="no-underline">
      <article class="p0 p4-lg">
        <div class="font-sans leading3">
          <h1 class="font-serif font-bold leading1 text2 text3-lg mb0">${title}</h1>
          <p class="mb0">${description}</p>
          <p class="text-1 tracking1">${readtime} to read</p>
        </div>
      </article>
    </a>
  `
}
