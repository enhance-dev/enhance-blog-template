/** @type {import('@enhance/types').EnhanceApiFn} */
export async function post({ body }) {
  const authorized = body.password === process.env.SECRET_PASSWORD

  return {
    location: '/admin',
    session: { authorized }
  }
}
