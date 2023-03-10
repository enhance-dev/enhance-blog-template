export default function MarkdownContent({ html }) {
  return html`
      <style>
        :host > * {
          margin: auto;
        }

        strong {
          font-weight: 600;
        }

        small {
          opacity: 0.6;
        }

        ol,
        ul {
          list-style: none;
        }

        ol {
          list-style: none;
          counter-reset: number-counter;
        }

        ol li {
          counter-increment: number-counter;
        }

        ol li:before {
          font-family: var(--font-mono);
          display: inline-block;
          padding-right: 0.5ch;
          content: counter(number-counter) '.';
          font-weight: 600;
        }

        ul li:before {
          content: '•';
          padding-right: 0.5ch;
        }

        li > ul {
          padding-left: 1.5rem;
        }

        li + li,
        dd + dt {
          margin-top: 1.5rem;
        }

        dl {
          margin: 1.5rem 0;
        }

        dt {
          font-weight: 600;
        }

        a {
          text-decoration: underline;
        }

        p a,
        li a,
        dd a {
          font-weight: 600;
          overflow-wrap: break-word;
        }

        table {
          width: 100%;
        }

        th {
          color: var(--dark);
          background: var(--yellow);
          text-align: left;
        }

        table caption {
          padding: 0.5rem;
        }

        th,
        td {
          padding: 0.5rem;
        }

        tr:nth-child(2n) {
          background-color: var(--smoke);
        }

        blockquote {
          border: 1px solid var(--yellow);
        }

        :not(begin-command, begin-code) > pre,
        begin-code {
          margin-block: 1.5em;
        }

        code {
          font-family: var(--font-mono);
          font-size: 0.95em; /* match body/heading x-height */
        }

        h1 code,
        h2 code,
        h3 code {
          background-color: transparent;
          font-weight: 600;
        }

        :not(pre, h1, h2, h3) > code {
          padding: 0.1rem 0.2rem;
          line-height: 1rem;
          overflow-wrap: break-word;
          background-color: var(--light);
          border-radius: 0.25rem;
        }

        blockquote :not(pre) > code {
          background-color: var(--smoke);
        }

        pre code {
          display: block;
          max-width: 100%;
          min-width: 100px;
          font-size: 1rem;
          padding: 0.7rem 0.9rem;
          color: var(--hl-color);
          background-color: var(--hl-bg);
          white-space: pre;
          tab-size: 2;
          -webkit-overflow-scrolling: touch;
          overflow-x: auto;
        }

        pre button {
          display: none;
          position: absolute;
          top: 0.5rem;
          right: 0.5rem;
          width: 1rem;
          height: 1rem;
          opacity: 0.5;
          color: var(--dark);
        }

        pre:hover button {
          display: block;
        }

        pre button:hover {
          opacity: 1;
        }

        pre button svg {
          width: 1rem;
          height: 1rem;
          pointer-events: none;
        }

        hr {
          border-color: var(--yellow);
        }

        figcaption {
          font-size: 0.875rem; /* text-1 is just too small */
          padding: 0.75rem 1rem;
          background-color: var(--smoke);
        }

        figcaption p {
          margin: 0 !important; /* I'm so sorry, the markdown class mappings made me do it */
        }

        figcaption code {
          background-color: transparent;
        }

        @media screen and (min-width: 90em) {
          figcaption {
            font-size: 1rem;
          }
        }

        kbd {
          border: 1px solid var(--syntax-gray);
          border-radius: 0.25em;
          font-family: var(--font-mono);
          font-weight: 600;
          padding-inline: 0.25em;
        }

        .iframe-container {
          padding-bottom: 65.25%;
          padding-top: 30px;
          -webkit-overflow-scrolling: touch;
        }
      </style>

      <slot name="doc"></slot>
    `
}
