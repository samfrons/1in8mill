var AppModel, StoryModel,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

AppModel = (function(_super) {

  __extends(AppModel, _super);

  function AppModel() {
    return AppModel.__super__.constructor.apply(this, arguments);
  }

  AppModel.prototype.defaults = {
    name: 'BornSinner'
  };

  return AppModel;

})(Backbone.Model);

StoryModel = (function(_super) {

  __extends(StoryModel, _super);

  function StoryModel() {
    return StoryModel.__super__.constructor.apply(this, arguments);
  }

  StoryModel.prototype.defaults = {
    title: "",
    description: "",
    date: "",
    mainImg: "",
    storyImg: "",
    audioFile: "",
    audioSnippet: ""
  };

  StoryModel.prototype.initialize = function() {};

  return StoryModel;

})(Backbone.Model);
