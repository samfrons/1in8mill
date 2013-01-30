class MainView extends Backbone.View

  el: '#content'

  template: app.templates['application']
  
  events:
    'hover .mainImage': 'fadeStory'
    'click .navItem':'navClick'
    'click .storyItemWrap':'openStory'
    
  render: ->
    $('.storyContent').height(0)
    $(@el).html(@template())

  #our initial post-render animations
  postRender: ->
    console.log(app.collections.stories.models.length)
    @scrollTimeline(app.collections.stories.models.length, 800)
    $('.storyContent').animate({height:'+=450px'}, 800)
    setTimeout (_this) -> 
        _this.scrollTimeline(1, 800)
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
    
  scrollTimeline:(story, callback) ->
    story_width = 580
    scroll = ((story*story_width)-story_width)
    console.log scroll
    $('.storyContent').scrollTo(scroll,1000)  
    # $(e.currentTarget).scrollTo()
    $('.storyItemsWrapper > *[data-record="'+story+'"]'); #highlight this
    
  openStory: (e) ->
    window.EVENTDEBUG = e
    _this = @
    story = $(e.currentTarget).data('record') 
    others = $('#storyItemsWrapper  > :not(*[data-record="'+story+'"])'); #... the *others*... voted off the island (array of dom objects)
    $(@el).on 'jcbs:stories:hidden', () ->
      $('#storyItemsWrapper').children().wrap('<div id="storyWrapBG"/>')
      $('#storyWrapBG').width($('.storyContent').width())
      $('#storyWrapBG').height($('.storyContent').height())
      $('#storyWrapBG').append('<div class="clear"></div>')
      console.log(e.currentTarget)
      $(e.currentTarget).fadeOut(500, () ->
        console.log('fadeout complete')
        # $(e.currentTarget).fadeOut()
        $('#storyWrapBG').fadeIn()
      )

      
    
    _.each others, (other, i) ->
      $(other).fadeOut 800, () ->
        
      i++
      if i >= others.length
        setTimeout (_this) ->
            $(_this.el).trigger('jcbs:stories:hidden')
          , 800, app.views.main
        
        
    
    console.log(story)
    
    