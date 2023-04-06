/** @type {import('@enhance/types').EnhanceElemFn} */
export default function ({ html, state: { store } }) {
  const { mentions } = store

  console.log(mentions)

  if (!mentions || mentions.length < 1) return '<p style="text-align: center;">Awaiting mentions of this page...</p>'

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
      details summary::-webkit-details-marker,
      details summary::marker {
        display: none;
        content: '';
      }
      details pre {
        width: 100%;
        overflow: auto;
        white-space: pre;
        font-size: 0.8rem;
      }
    </style>

    <h2 class="text2 text4-lg font-heading tracking-1 font-bold mb0 mt4 leading1" id="site-title">Mentions</h2>
    <ul>
  ${mentions.map(m => `
      <li>
        <a href="${m.source}">${`"${m.sourceTitle  || m.source}"`}</a>
        ${m.sourceAuthor ? `by ${m.sourceAuthor}` : ''}
        ${m.summary ? `<div>${m.summary}</div>` : ''}
        <details class="hidden">
          <summary>&gt;</summary>
          <pre>${JSON.stringify(m, null, 2)}</pre>
        </details>
      </li>`.trim(),
  ).join('')}
    </ul>
  `
}
