/** @type {import('@enhance/types').EnhanceElemFn} */
export default function ({ html, state }) {
  const { store } = state
  const { limit, offset, total } = store

  return html`
    <site-header></site-header>
    <main>
      <blog-container>
        <blog-posts></blog-posts>
        <blog-pagination
          limit="${limit}"
          offset="${offset}"
          total="${total}"
          class="pb3 pb5-md"
        ></blog-pagination>
      </blog-container>
    </main>
    <site-footer></site-footer>
  `
}
