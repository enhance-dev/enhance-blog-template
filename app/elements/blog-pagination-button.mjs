export default function BlogPagination({ html, state }) {
  const { attrs, store } = state
  const { limit = 20 } = store
  const { index, label } = attrs

  const booleanAttr = (attrs, attr) =>
    Object.keys(attrs).includes(attr) ? attr : ''
  const active = booleanAttr(attrs, 'active')

  return html`
    <style>
      .active {
        color: var(--light);
        background-color: var(--red);
      }
    </style>
    <li
      class="
         flex
         items-center
         justify-center
         font-semibold
         leading5
         pt-2
         pb-2
        "
    >
      ${!active
    ? `<a
             class="no-underline pl-1 pr-1"
             href="/blog?offset=${parseInt(index, 10) * limit}&limit=${limit}"
           >
            ${label}
          </a>`
    : `<div class="pl-1 pr-1 ml-3 mr-3 radius0 active">
               ${label}
             </div>`}
    </li>
  `
}
