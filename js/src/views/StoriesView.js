var StoriesView,
  __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

StoriesView = (function(_super) {

  __extends(StoriesView, _super);

  function StoriesView() {
    this.initialize = __bind(this.initialize, this);
    return StoriesView.__super__.constructor.apply(this, arguments);
  }

  StoriesView.prototype.el = '#storyItems';

  StoriesView.prototype.template = app.templates['stories'];

  StoriesView.prototype.initialize = function() {
    var collection, _this;
    _this = this;
    collection = app.collections.stories;
    return collection.fetch({
      success: function(data) {
        _this.render();
        return collection.bind("reset", this.render);
      }
    });
  };

  StoriesView.prototype.render = function() {
    var collection, __el, _el, _subel;
    __el = '#storyItems';
    $(__el).html(this.template());
    _el = $(__el);
    _subel = $('#storyItemsWrapper');
    collection = app.collections.stories;
    _.each(collection.models, function(model, i) {
      var _view;
      _view = new StoryView();
      _subel.append(_view.render(model.toJSON()));
      $('.mainImage').fitToParent();
      return $('.navWrap ul').append(app.templates['partials/navItem']({
        model: model.toJSON(),
        i: i
      }));
    });
    $('#storyItemsWrapper').width((app.collections.stories.models.length + 1) * 580);
    return app.views.main.postRender();
  };

  return StoriesView;

})(Backbone.View);
