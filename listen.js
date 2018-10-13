const $ = require('jquery')
const _s = require('underscore.string')

module.exports = (stack, basename) => {
  if(basename) stack.state.link_basename = basename
  stack.on('init', () => {
    var fireLink = (pathname, event) => {
      console.log('fire link..')
      if(pathname.search(basename) > -1) {
        var strippedLink = _s.strRight(pathname, basename + '/')
        if(event) {
          event.stopPropagation()
          event.preventDefault()
          state.event = event
        }
        stack.fire( strippedLink , () => {
          state.event = null
        })
      }
    }
    $(document).on('click', (event) => {
      if($(event.target).is('a, a *')) {
        var link = $(event.target).closest('a')[0]
        return fireLink(link.pathname, event)
      }
    })
  })
}
