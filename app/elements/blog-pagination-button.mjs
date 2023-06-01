export default function BlogPaginationButton({ html, state }) {
  const { attrs, store } = state
  const { limit = 20 } = store
  const { index, label } = attrs

  const booleanAttr = (attrs, attr) =>
    Object.keys(attrs).includes(attr) ? attr : ''
  const active = booleanAttr(attrs, 'active')

  return html`
    <li
      class="
         flex
         align-items-center
         justify-content-center
         font-body
         leading5
         m0
        "
    >
      ${!active
    ? `<a
             class="no-underline pi-1"
             href="/?offset=${parseInt(index, 10) * limit}&limit=${limit}"
           >
            ${label}
          </a>`
    : `<div class="pi-1 font-bold active">
               ${label}
             </div>`}
    </li>
  `
}
