export default defineEventHandler(() => {
  const message = 'Hello, world!'
  const timestamp = new Date().toISOString()
  const thisIsCool = true
  
  return { message, timestamp, thisIsCool }
})