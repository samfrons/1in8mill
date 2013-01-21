var StoryView,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

StoryView = (function(_super) {

  __extends(StoryView, _super);

  function StoryView() {
    return StoryView.__super__.constructor.apply(this, arguments);
  }

  StoryView.prototype.tagName = '.storyItem';

  StoryView.prototype.template = app.templates['story'];

  StoryView.prototype.render = function(model) {
    return this.template(model);
  };

  return StoryView;

})(Backbone.View);
