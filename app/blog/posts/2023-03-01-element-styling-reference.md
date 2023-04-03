---
title: Element Styling Reference
description: "A post using a range of HTML elements which you can use as a styling reference."
published: "March 1, 2023"
---

This post uses a wide range of HTML elements, which you can use a styling reference. For example, this is a plain paragraph, and it features things like <em>emphasized text</em> and even <strong>text of strong importance</strong>. But perhaps you’d rather see things in an unordered list?

- Here's a list item.
- And a second.
- And, finally, a third list item, which uses a fair bit more text, so that you can see what your list item looks like with line wrapping.

Or perhaps you'd rather something a little more orderly:

1. This is an ordered list.
1. Its items are preceded by ordinal characters like numbers and letters.
1. Use this list when the order of the items is important. For example, the ingredients in a recipe would be written using an unordered list, but the cooking instructions would be written using an ordered list. Now this in wraps, too.

For those times when you need to present a list of terms with accompanying details for each, you can use a description list:

<dl>
  <dt>Description list</dt>
  <dd>An HTML element used to enumerate a group of terms and accompanying details pertaining to those terms</dd>

  <dt>Description term</dt>
  <dd>An HTML element used to denote a term within a descripton list</dd>

  <dt>Description detail</dt>
  <dd>An HTML element used to denote some details for an accompanying term within a description list</dd>
</dl>

## A second level heading

Sometimes, you might wish to feature a quote from someone. For that, of course, you would use the `blockquote` element (and hey, there's an inline code element)!

> The general struggle for existence of animate beings is not a struggle for raw materials — these, for organisms, are air, water and soil, all abundantly available — nor for energy which exists in plenty in any body in the form of heat, but a struggle for [negative] entropy, which becomes available through the transition of energy from the hot sun to the cold earth.
>
> — Ludwig Boltzmann

### A third level heading

For those of you who might be using this blog to write about code, you'll want to pay attention to the styling of your code blocks. For example:

```javascript
export default function MyCodeBlock({ html, state }) {
  const { attrs } = state
  const { lang } = attrs

  return html`
    <pre>
      <code data-language='${lang}'>
        <slot></slot>
      </code>
    </pre>
  `
}
```

For information on how to change the code highlighting colours, see the post [How to use this template](/posts/2023-03-08-how-to-use). (Hey, there's a link!)

#### A fourth level heading

If you want to display tabular data, there is, of course, the `table` element! Here's one detailing some of the HTML elements used to build tables:

| HTML Element | Common name | Role |
|--------------|-------------|------|
| `<table>` | Table | Declare a table |
| `<thead>` | Table header | Define a set of rows making up the header of the table |
| `<th>` | Table header cell | Define a cell within the header of the table |
| `<tbody>` | Table body | Define the body of the table |
| `<tr>` | Table row | Define a row in the table |
| `<td>` | Table data cell | Define a cell in the table |

* * *

Sometimes it's useful to separate flow content with a horizontal rule, or `<hr>` element. Look just above this text to see one in action!

## That's it!

If you think of any other elements you’d like to see showcased in this example post, feel free to [let us know on Discord](https://enhance.dev/discord), or [file an issue on GitHub!](https://github.com/enhance-dev/enhance-blog-template/issues)
