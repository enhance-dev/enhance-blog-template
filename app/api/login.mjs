/** @type {import('@enhance/types').EnhanceApiFn} */
export async function post({ body, method, path }) {
  console.log(`<${Date.now()}> ${method} ${path}`)

  const authorized = body.password === process.env.SECRET_PASSWORD

  return {
    location: '/admin',
    session: { authorized }
  }
}
