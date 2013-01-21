var AppEvents;

AppEvents = (function() {

  function AppEvents() {}

  _(AppEvents.prototype).extend(Backbone.Events);

  return AppEvents;

})();
