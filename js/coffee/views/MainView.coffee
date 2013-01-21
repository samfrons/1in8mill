class MainView extends Backbone.View

  el: '#content'

  template: app.templates['application']
  
  events:
    'hover .mainImage': 'fadeStory'
    'click .navItem':'navClick'
    
  render: ->
    $('.storyContent').height(0)
    $(@el).html(@template())

  #our initial post-render animations
  postRender: ->
    console.log(app.collections.stories.models.length)
    @scrollTimeline(app.collections.stories.models.length, 800)
    $('.storyContent').animate({height:'+=450px'}, 800)
    setTimeout (_this) -> 
        _this.scrollTimeline(0, 800)
      , 2000, app.views.main
    @bindersFullOfWomen()
  
  #get it ;) 
  bindersFullOfWomen: ->
    #set our "Binders" here that backbone doesn't support
    $('.storyContent').scroll () ->
      # $('.storyContent').animate({backgroundPosition:"-=10000px"})
    
    
  
  fadeStory:(e) ->
    $(e.currentTarget).toggleClass('hoverStory')

  navClick: (e) ->
    @scrollTimeline($(e.currentTarget).data('story'))
    
  scrollTimeline:(index, callback) ->
    story = index+1
    story_width = 580
    scroll = ((story*story_width)-story_width)
    console.log scroll
    $('.storyContent').scrollTo(scroll,1000)  
    # $(e.currentTarget).scrollTo()