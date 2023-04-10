import arc from "@architect/functions"

// eslint-disable-next-line no-unused-vars
export async function handler (event) {
  await arc.events.publish({
    name: 'send-webmention',
    payload: {
      source: 'https://invent-is8.begin.app/posts/2023-04-06-hcard-test',
      target: 'https://ship-hi3.begin.app/posts/2023-04-06-hcard-test'
    },
  })

  return
}
