/** @type {import('@enhance/types').EnhanceElemFn} */
export default function ({ html, state }) {
  const { store } = state
  const { post } = store
  const { frontmatter } = post
  const { title = '' } = frontmatter

  return html`
    <style>
      :host {
        display: block;
        padding-top: var(--nav-height);
        background-color: var(--light);
        color: var(--dark);
      }

      :host > blog-container {
        background-color: white;
      }

      @media screen and (min-width: 64em) {
        article {
          max-width: 58rem;
        }
      }

      @media screen and (min-width: 90em) {
        article {
          max-width: 64rem;
        }
      }
    </style>
    <link rel="stylesheet" href="/_public/css/docs-highlight.css" />

    <blog-container class="relative">
      <article
        class="font-sans text1-xl leading4 m-auto mt0 mb0 mt2-md mb2-md mt4-lg mb4-lg p0 p2-sm p4-md p5-lg p6-xl"
      >
        <h1 class="font-serif mb0 text3 text4-md leading1">${title}</h1>

        <markdown-content>
          <section slot="doc">${post.html}</section>
        </markdown-content>
      </article>
    </blog-container>
  `
}
