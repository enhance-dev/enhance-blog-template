/** @type {import('@enhance/types').EnhanceElemFn} */
export default function MyHCard({ html, state: { store } }) {
  const { hCard } = store
  const attributes = Object.keys(hCard).map(key => `${key}="${hCard[key]}" `).join('')
  return html`
      <h-card ${attributes}></h-card>
    `
}
