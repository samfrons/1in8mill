# Main Router
class MainRouter extends Backbone.Router
  routes: 
    "" : "index"
    "#":"index"
    "home":"userHome"

  
  index: ->
    app.views.main.render()
  