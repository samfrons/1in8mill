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
  
  renderFullStory:(id,_el) ->
    _this = @
    _model = app.collections.stories.models[id-1]
    window.DEBUGSTORYMODEL = _model
    _render = (_image) ->
      console.log('render called', _image)
      _el.html app.templates['fullstory']({
        data: {
          title: _model.get('title')
          description: _model.get('descriotion')
          date: _model.get('date')
          image: _image
        }
      })
      console.log(_model.get('title'), _model)
      # _el.fadeOut(300, () ->
      #         
      #         _el.fadeIn(300)
      #       )
    
    i = 0
    _closeStory = (interval) ->
      clearInterval(interval)
      console.log('close story called')
      
    _int = setInterval(() ->
        console.log('interval called', i)
        if i <= _model.get('storyImg').length
          _render(_model.get('storyImg')[i])
          i=i+1 #i++ not working?
        else
          _closeStory(_int)
      , 500)
    
    
    
  openStory: (e) ->
    #refs 
    window.EVENTDEBUG = e
    _this = @
    story = $(e.currentTarget).data('record') 
    others = $('#storyItemsWrapper  > :not(*[data-record="'+story+'"])'); #... the *others*... voted off the island (array of dom objects)
    
    
    $(@el).on 'jcbs:stories:hidden', () ->
      $('#storyItemsWrapper').children().wrap('<div id="storyWrapBG"/>')
      $('#storyWrapBG').width($('.storyContent').width())
      $('#storyWrapBG').height($('.storyContent').height())
      $('#storyWrapBG').append('<div class="clear"></div>')
        
      _record = $(e.currentTarget).data('record')
      _id = 'story-item-'+_record
      
      $(e.currentTarget).attr('id',_id)
      console.log('#'+_id)
      $('#storyWrapBG').fadeIn()
      $('#'+_id).fadeOut(1000, () ->
          console.log('fadeout complete')
          #now is time to append the new story
          _this.renderFullStory(_record,$('#storyWrapBG'))
        )
      

      
    
    _.each others, (other, i) ->
      $(other).fadeOut 800, () ->
        
      i++
      if i >= others.length
        setTimeout (_this) ->
            $(_this.el).trigger('jcbs:stories:hidden')
          , 800, app.views.main
        
        
    
    console.log(story)
    
    