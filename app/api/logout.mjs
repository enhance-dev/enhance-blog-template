/** @type {import('@enhance/types').EnhanceApiFn} */
export async function get() {
  return {
    location: '/',
    session: { authorized: false }
  }
}
