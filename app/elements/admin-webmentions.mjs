/** @type {import('@enhance/types').EnhanceElemFn} */
export default function AdminWebmentions({ html, state }) {
  const { store: { mentions } } = state

  function form(mention) {
    return /* html */`
        <form action="/admin/webmentions" method="POST">
          <input type="hidden" name="key" value="${mention.key}">
          <button type="submit" name="approved" value="true">👍</button>
          <button type="submit" name="approved" value="false">⛔️</button>
        </form>
      `
  }

  return html`
      <style>
        h2 {
          margin-bottom: 1rem;
          text-align: center;
        }
        table th {
          border-bottom: 1px solid var(--secondary-100);
          padding: 0.5rem;
        }
        table td {
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          padding: 0.5rem;
        }
        table td form {
          display: flex;
          justify-content: space-around;
        }
      </style>

      <h2>💬 Webmentions</h2>

      <table>
        <thead>
          <tr>
            <th>Source</th>
            <th></th>
            <th>Author</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
    ${mentions.map(m => {
    const sourceUrl = new URL(m.source)
    return /* html */`
            <tr>
              <td>${sourceUrl.hostname}: <a href="${sourceUrl.href}" target="_blank">${m.sourceTitle}</a></td>
              <td>→ ${m.targetPath}</td>
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
