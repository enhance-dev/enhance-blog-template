export default function SiteHeader ({ html }) {
  return html`
    <h1 class='text2 text4-lg text-center font-heading font-bold tracking-2 pt4 pt6-lg pb0 pb2-lg'>Site Title</h1>
    <nav class='pb4 pb6-lg'>
      <ul class='text-center font-body uppercase tracking2 flex flex-row justify-center gap0 list-none'>
        <li>
          <a href='/'>Home</a>
        </li>
        <li>
          <a href='/blog'>Blog</a>
        </li>
      </ul>
    </nav>
  `
}
