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
        background-color: white;
      }

      .avatar {
        width: 40px;
        aspect-ratio: 1 / 1;
      }
    </style>
    <a href="${href}" class="no-underline">
      <article
        class="p0-md p2-lg grid gap2-md items-center-md col-3-md col-5-xl"
      >
        <div class="p0 p-none-md col-span-2-md col-span-3-xl">
          <h1 class="font-serif leading1 text1 text2-md mb0">${title}</h1>
          <p class="mb0 mb2-md">${description}</p>
          <p class="text-1 tracking1 mb0 mb2-lg description">${readtime} to read</p>
        </div>
      </article>
    </a>
  `
}
