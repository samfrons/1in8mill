var StoriesCollection,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

StoriesCollection = (function(_super) {

  __extends(StoriesCollection, _super);

  function StoriesCollection() {
    return StoriesCollection.__super__.constructor.apply(this, arguments);
  }

  StoriesCollection.prototype.model = StoryModel;

  StoriesCollection.prototype.url = 'js/fixtures/stories.json?129';

  return StoriesCollection;

})(Backbone.Collection);
