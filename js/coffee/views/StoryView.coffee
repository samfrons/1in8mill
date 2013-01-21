class StoryView extends Backbone.View

  tagName: '.storyItem'

  template: app.templates['story']
  

  render:(model) ->
    @template(model)
  
    
