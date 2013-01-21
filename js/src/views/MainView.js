var MainView,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

MainView = (function(_super) {

  __extends(MainView, _super);

  function MainView() {
    return MainView.__super__.constructor.apply(this, arguments);
  }

  MainView.prototype.el = '#content';

  MainView.prototype.template = app.templates['application'];

  MainView.prototype.events = {
    'hover .mainImage': 'fadeStory',
    'click .navItem': 'navClick'
  };

  MainView.prototype.render = function() {
    $('.storyContent').height(0);
    return $(this.el).html(this.template());
  };

  MainView.prototype.postRender = function() {
    console.log(app.collections.stories.models.length);
    this.scrollTimeline(app.collections.stories.models.length, 800);
    $('.storyContent').animate({
      height: '+=450px'
    }, 800);
    setTimeout(function(_this) {
      return _this.scrollTimeline(0, 800);
    }, 2000, app.views.main);
    return this.bindersFullOfWomen();
  };

  MainView.prototype.bindersFullOfWomen = function() {
    return $('.storyContent').scroll(function() {});
  };

  MainView.prototype.fadeStory = function(e) {
    return $(e.currentTarget).toggleClass('hoverStory');
  };

  MainView.prototype.navClick = function(e) {
    return this.scrollTimeline($(e.currentTarget).data('story'));
  };

  MainView.prototype.scrollTimeline = function(index, callback) {
    var scroll, story, story_width;
    story = index + 1;
    story_width = 580;
    scroll = (story * story_width) - story_width;
    console.log(scroll);
    return $('.storyContent').scrollTo(scroll, 1000);
  };

  return MainView;

})(Backbone.View);
