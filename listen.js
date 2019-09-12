const $ = require('jquery')
const _s = require('underscore.string')

if(window.isElectron) {
  const shell = window.require('electron').shell //TODO: make compatible with non Electron
}

module.exports = (stack, basename) => {
  if(basename) stack.state.link_basename = basename
  var fireLink = (link, event) => {

    //if web link, just return so default handling
    if(window.isElectron) {
      if( _s.include(link.href, 'http')) {
        event.preventDefault()
        return shell.openExternal(link.href)
      }
    }

    let pathname = decodeURIComponent(link.pathname) //< convert any URL enncoded spaces to normal spaces
    //if(_s.include(link'http'))

    if(pathname.search(basename) > -1) {
      let strippedLink = _s.strRight(pathname, basename + '/')
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
      return fireLink(link, event)
    }
  })
}
