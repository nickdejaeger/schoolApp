export default defineNitroPlugin((nitroApp) => {
  nitroApp.hooks.hook('render:html', (html, { event }) => {
    //console.log('HTML')
    //html.bodyAppend.push('<h1>i am a plugin</h1>')
  })

  nitroApp.hooks.hook('render:response', (response, { event }) => {
    //console.log(event)
    console.log( event.node.req.headers['user-agent'] )
  })
})