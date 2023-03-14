export default function BlogContainer({ html }) {
  return html`
      <style>
        :host {
          background: var(--light-fade);
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

        @media (prefers-color-scheme: dark) {
          :host {
            background: var(--dark-fade);
          }
        }
      </style>

      <slot></slot>
    `
}
