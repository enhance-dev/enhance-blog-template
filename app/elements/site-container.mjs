export default function BlogContainer({ html }) {
  return html`
      <style>
        :host {
          display: block;
          max-width: 90vw;
          margin-left: auto;
          margin-right: auto;
        }

        @media screen and (min-width: 48em) {
          :host {
            max-width: 100ch;
          }
        }
      </style>

      <slot></slot>
    `
}
