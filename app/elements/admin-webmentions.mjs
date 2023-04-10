/** @type {import('@enhance/types').EnhanceElemFn} */
export default function AdminWebmentions({ html, state }) {
  const { store: { mentions } } = state

  function form(mention) {
    return /* html */`
        <style>
          button[type='submit'] {
            background: white;
            width: 1.75rem;
            aspect-ratio: 1 / 1;
          }
        </style>
        <form action="/admin/webmentions" method="POST">
          <input type="hidden" name="key" value="${mention.key}">
          <button type="submit" name="approved" class='radius-100 inline-flex flex-none items-center justify-center leading0 mr-5 mr-2-lg' value="true">👍</button>
          <button type="submit" name="approved" class='radius-100 inline-flex flex-none items-center justify-center leading0' value="false">⛔️</button>
        </form>
      `
  }

  return html`
      <style>
        table {
          background: hsla(0deg 0% 0% / 5%);
          table-layout: fixed;
        }

        tbody tr:nth-child(odd) {
          background: hsla(0deg 0% 0% / 5%);
        }

        @media (prefers-color-scheme: dark) {
          table {
            background: hsla(0deg 0% 100% / 5%);
          }

          tbody tr:nth-child(odd) {
            background: hsla(0deg 0% 100% / 5%);
          }
        }

        tr {
          height: 2.5rem;
        }

        th,
        td {
          padding-inline: 0.5rem;
        }

        table td {
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
      </style>

      <h2 class='font-heading font-bold text2 text3-lg mb3 text-center'>💬 Webmentions</h2>

      <table class='font-body w-full mb5'>
        <thead class='text-left'>
          <tr>
            <th>Source</th>
            <th>Target</th>
            <th>Author</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody class='text-1'>
    ${mentions.map(m => {
    const sourceUrl = new URL(m.source)
    return /* html */`
            <tr>
              <td><a href="${sourceUrl.href}" target="_blank" class='underline'>${m.sourceTitle} (${sourceUrl.hostname})</a></td>
              <td>${m.targetPath}</td>
              <td>${m.sourceAuthor}</td>
              <td>
        ${typeof m.approved === 'boolean'
    ? m.approved ? 'Approved' : 'Rejected'
    : form(m)
}
              </td>
            </tr>
      `
  }).join('')}
        </tbody>
      </table>
    `
}
