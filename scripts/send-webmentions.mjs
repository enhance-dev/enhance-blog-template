const myContent = 'https://making-2c4.begin.app/'
const mentions = {
  // 'https://nature-6o8.begin.app/webmention': { // Cole
  //   source: myContent,
  //   target: 'https://nature-6o8.begin.app/',
  // },
  // 'https://making-2c4.begin.app/webmention': { // Taylor
  //   source: myContent,
  //   target: 'https://making-2c4.begin.app/',
  // },
  // 'https://rain-5h6.begin.app/webmention': { // KJ
  //   source: myContent,
  //   target: 'https://rain-5h6.begin.app/',
  // },
  // 'https://sweet-1c7.begin.app/webmention': { // Simon
  //   source: myContent,
  //   target: 'https://sweet-1c7.begin.app/',
  // },
  // 'https://color-bsy.begin.app/webmention': { // Bethel
  //   source: myContent,
  //   target: 'https://color-bsy.begin.app/',
  // },
  // 'https://tbeseda.com/webmention': { // tbeseda.com test article
  //   source: myContent,
  //   target: 'https://tbeseda.com/articles/2023/01/webmention-test',
  // },
  //'http://localhost:3333/webmention': {
  //  source: myContent,
  //  target: 'http://localhost:3333/posts/2023-03-08-how-to-use',
  //},
  // 'https://ship-hi3.begin.app/webmention': {
  //  source: myContent,
  //  target: 'https://ship-hi3.begin.app/posts/2023-03-08-how-to-use',
  //},
}

for (const [endpoint, webmention] of Object.entries(mentions)) {
  const response = await fetch(endpoint, {
    method: 'POST',
    body: new URLSearchParams(webmention),
  })

  let message = `<${endpoint}>: `
  if (response.ok) {
    const contentType = response.headers.get('content-type')
    message += contentType?.startsWith('application/json')
      ? await response.json()
      : await response.text()
  } else {
    message += `Error ${response.status}: ${response.statusText}`
  }

  console.log(message)
}

