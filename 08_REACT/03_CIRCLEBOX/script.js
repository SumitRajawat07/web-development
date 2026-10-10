import parent from './parent.js'

var root = ReactDom.createRoot( document.querySelector('#container'))

root.render( parent() )