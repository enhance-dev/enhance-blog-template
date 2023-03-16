export default function SiteLayout ({ html }) {
  return html`
    <site-container>
      <site-header></site-header>
        <slot></slot>
      <site-footer></site-footer>
    </site-container>
  `
}
