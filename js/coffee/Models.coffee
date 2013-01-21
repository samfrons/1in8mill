
#  AppModel  
class AppModel extends Backbone.Model
  defaults:
    name: 'BornSinner'
    
class StoryModel extends Backbone.Model
  defaults:
    title: ""
    description: ""
    date: ""
    mainImg: ""
    storyImg: ""
    audioFile: ""
    audioSnippet: ""
  
  initialize: ->
    
  