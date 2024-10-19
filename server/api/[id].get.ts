export default defineEventHandler((event) => {
  //const params = getRouterParams(event)
  const id = getRouterParam(event, 'id')

  return id
})