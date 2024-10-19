export default defineEventHandler((event) => {
  const authorization = getRequestHeader(event, 'authorization')

  if (authorization) {
    event.context.authorized = true
  }
  else {
    //throw createError({statusCode: 401, statusMessage: 'Unauthorized'})
  }
})