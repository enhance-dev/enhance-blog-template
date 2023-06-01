export default function SubmitButton ({ html }) {
  return html`
      <style>
        button {
          background-color: var(--color-dark);
          color: var(--color-light);
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }

        @media (prefers-color-scheme: dark) {
          button {
            background-color: var(--color-light);
            color: var(--color-dark);
          -webkit-font-smoothing: unset;
          -moz-osx-font-smoothing: unset;
          }
        }
      </style>
      <button type='submit' class='pb-3 pi0 font-semibold'>
        Submit
      </button>
    `
}
