/** @type {import('@enhance/types').EnhanceElemFn} */
export default function HCard({ html, state: { store } }) {
  const { hCard } = store
  const { name, photo, url } = hCard
  return html`
    <section class="h-card">
      <img class="u-photo" src="${photo}" alt="${name}">
      <aside>
        <a class="p-name u-url" href="${url}">${name}</a>
      </aside>
    </section>
  `
}
