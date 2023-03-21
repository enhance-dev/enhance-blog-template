export default function SiteLayout ({ html }) {
  return html`
    <site-container class='pl0 pr0 pl4-lg pr4-lg'>
      <site-header></site-header>
        <slot></slot>
      <site-footer></site-footer>
    </site-container>
  `
}
