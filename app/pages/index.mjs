/** @type {import('@enhance/types').EnhanceElemFn} */
export default function ({ html, state }) {
  const { store } = state
  const { limit, offset, total } = store

  return html`
    <h-card class="hidden"></h-card>
    <site-layout>
      <main>
        <blog-posts></blog-posts>
        <blog-pagination
          limit="${limit}"
          offset="${offset}"
          total="${total}"
          class="pb3 pb5-lg"
        ></blog-pagination>
      </main>
    </site-layout>
  `
}
