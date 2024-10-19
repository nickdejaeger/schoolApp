import myServerUtilFunction from "../utils/my-function"

export default defineEventHandler((event) => {
  try {
    setCookie(event, 'cookiename', 'cookievalue', {
      httpOnly: true,
      expires: new Date(Date.now() + 86400000 * 30),
      priority: 'high',
      secure: true
    })
    //deleteCookie(event, 'cookiename')
    return parseCookies(event)
  } catch(error) {

  }
  
  return myServerUtilFunction()
})