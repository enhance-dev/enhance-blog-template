export default function TextInput ({ html, state }) {
  const { attrs } = state
  const { autocomplete='off', id, label, name, placeholder = '', type } = attrs

  return html`
      <style>
        input {
          background-color: transparent;
          box-shadow: 0 0 0 1px hsl(0deg 0% 30% / 50%);
        }

        input:focus {
          outline: none;
          box-shadow: 0 0 0 2px var(--color-dark);
        }

        input::placeholder {
          color: hsla(0deg 0% 0% / 50%);
        }

        @media (prefers-color-scheme: dark) {
          input {
            box-shadow: 0 0 0 1px hsla(0deg 0% 80% / 60%);
          }
          input::placeholder {
            color: hsla(0deg 0% 100% / 50%);
          }
          input:focus {
            box-shadow: 0 0 0 2px var(--color-light);
          }
        }
      </style>
      <label>
        <span class='block text-1 mbe-3 font-semibold'>
          ${label}
        </span>
        <input id='${id}' name='${name}' type='${type}' placeholder='${placeholder}' autocomplete='${autocomplete}' class='mbe0 p-2 w-full' />
      </label>
    `
}
