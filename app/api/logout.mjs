/** @type {import('@enhance/types').EnhanceApiFn} */
export async function get({ method, path }) {
  console.log(`<${Date.now()}> ${method} ${path}`)

  return {
    location: '/',
    session: { authorized: false }
  }
}
