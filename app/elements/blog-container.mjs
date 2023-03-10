export default function BlogContainer({ html }) {
  return html`
      <style>
        :host {
          display: block;
          max-width: 90vw;
          margin-left: auto;
          margin-right: auto;
        }

        @media screen and (min-width: 30em) {
          :host {
            max-width: 85vw;
          }
        }

        @media screen and (min-width: 48em) {
          :host {
            max-width: 80vw;
          }
        }

        @media screen and (min-width: 90em) {
          :host {
            max-width: min(80vw, 90rem);
          }
        }
      </style>

      <slot></slot>
    `
}
