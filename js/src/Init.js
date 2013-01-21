
$(function() {
  return $.when(app.init()).done(function() {
    app.models.app = new AppModel();
    app.models.story = new StoryModel();
    app.collections.stories = new StoriesCollection();
    app.views.main = new MainView();
    app.views.stories = new StoriesView();
    app.routers.main = new MainRouter();
    app.events = new AppEvents();
    return Backbone.history.start();
  });
});
