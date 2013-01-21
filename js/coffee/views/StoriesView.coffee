class StoriesView extends Backbone.View

  el: '#storyItems'

  template: app.templates['stories']

  
  initialize: =>
    _this = @
    
    collection = app.collections.stories
    
    collection.fetch {
      success: (data) ->
        _this.render()
        collection.bind "reset", @render
    }
  
  render: ->
    __el = '#storyItems' #for some reason, we're losing scope of @el
    
    $(__el).html(@template())
    
    _el = $(__el)
    _subel = $('#storyItemsWrapper')
    
    collection = app.collections.stories
    
    _.each collection.models, (model, i) ->
        #create a new story item view for each record in the model
        _view = new StoryView()
        
        #append each one independently
        _subel.append _view.render(model.toJSON())
        
        #resize the images to their parent
        $('.mainImage').fitToParent()
        
        #create the nav
        $('.navWrap ul').append(app.templates['partials/navItem']({model:model.toJSON(), i:i}))
  
    $('#storyItemsWrapper').width((app.collections.stories.models.length+1) * 580)
    app.views.main.postRender()