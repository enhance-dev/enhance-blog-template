import { getLinkTag } from '@enhance/arc-plugin-styles/get-styles'

export default function Head() {
  return`
    <!DOCTYPE html>
    <html lang='en'>
      <head>
        <title>Enhance Blog Template</title>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        ${getLinkTag()}
        <link rel='stylesheet' href='/_public/css/global.css' />
        <link rel='stylesheet' href='/_public/css/a11y-dark.min.css' />
      </head>
  `
}
