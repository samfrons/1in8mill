var MainRouter,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

MainRouter = (function(_super) {

  __extends(MainRouter, _super);

  function MainRouter() {
    return MainRouter.__super__.constructor.apply(this, arguments);
  }

  MainRouter.prototype.routes = {
    "": "index",
    "#": "index",
    "home": "userHome"
  };

  MainRouter.prototype.index = function() {
    return app.views.main.render();
  };

  return MainRouter;

})(Backbone.Router);
