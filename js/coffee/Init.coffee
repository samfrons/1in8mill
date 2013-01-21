$ -> 
  $.when(app.init()).done () ->
    app.models.app = new AppModel()
    app.models.story = new StoryModel()
    app.collections.stories = new StoriesCollection()
    app.views.main = new MainView()
    app.views.stories = new StoriesView()
    # app.views.story = new StoryView()
    app.routers.main = new MainRouter()
    app.events = new AppEvents()
    Backbone.history.start()