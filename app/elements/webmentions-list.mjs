/** @type {import('@enhance/types').EnhanceElemFn} */
export default function ({ html, state: { store } }) {
  const { mentions } = store

  console.log(mentions)

  return html`
    <style>
      ul {
        width: 100%;
        list-style: none;
      }
      ul li {
        margin-bottom: 0.5rem;
      }
      details {
        margin-top: 0.25rem;
      }
      details summary {
        cursor: pointer;
        font-size: 0.8rem;
        font-weight: bold;
        color: var(--warning-700);
      }
      details pre {
        width: 100%;
        overflow: auto;
        white-space: pre;
        font-size: 0.8rem;
      }

      article {
        background-color: hsla(0deg 0% 0% / 10%);
      }

      .authorInitial {
        background-color: var(--color-dark);
        color: var(--color-light);
        width: 2rem;
        aspect-ratio: 1 / 1;
      }

      @media (prefers-color-scheme: dark) {
        article {
          background-color: hsla(0deg 0% 100% / 10%);
        }

        .authorInitial {
          background-color: var(--color-light);
          color: var(--color-dark);
        }
      }

    </style>

    <hr>
    <h1 class="text2 text4-lg font-heading tracking-1 font-bold mb4 mt4 leading1">Mentions</h1>
    <ul class='leading3 grid grid-row gap0'>
  ${mentions.map(m => `
      <li>
        <article class='font-body p0'>
          <div class="flex mb0 items-center">
            ${m.sourceAuthorImage
    ? `<img class="authorAvatar radius-100 flex-shrink-0" width="32" height="32" src="${m.sourceAuthorImage}"/>`
    : `<div class="authorInitial radius-100 flex-shrink-0 flex items-center justify-center font-bold mr-2" aria-hidden="true">${m.sourceAuthor.substring(0,1)}</div>`
}
            <h1 class='text0 leading1'>
              <span class='font-bold block'>${m.sourceAuthor}</span>
              <span class='text-1'>${new Date(m.created).toLocaleDateString()}</span>
            </h1>
          </div>
          ${m.summary ? `<div>${m.summary}</div>` : ''}
          <div class='mt0 text-1'>Source: <a class='underline' href="${m.source}">${`"${m.sourceTitle  || m.source}"`}</a></div>
        </article>

        <details class='hidden'>
          <summary>Raw</summary>
          <pre>${JSON.stringify(m, null, 2)}</pre>
        </details>

      </li>`.trim(),
  ).join('')}
    </ul>
  `
}
