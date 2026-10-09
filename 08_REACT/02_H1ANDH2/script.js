var h1 = React.createElement('h1' , {id:'hero'} , "heelooooooo")
var h2 = React.createElement('h1' , {class:'huii'} , "hyyyyyyyy")


var div = React.createElement('div',  {id:'parent'} , [h1,h2] )

var root = ReactDOM.createRoot(document.querySelector('#box'))

root.render(div);



