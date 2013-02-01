this["app"] = this["app"] || {};
this["app"]["templates"] = this["app"]["templates"] || {};

this["app"]["templates"]["application"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers; data = data || {};
  


  return "\n<div class=\"wrapper\">\n  <div class=\"topbar\"><img id=\"logo\" src=\"resources/img/bornsinner-small.jpg\"/></div>\n  <div class=\"stories\">\n    <div class=\"storyContent\">\n      <div id=\"storyItems\"></div>\n    </div>\n    <div class=\"storyNav\">\n      <div class=\"navWrap\">\n        <ul></ul>\n      </div>\n    </div>\n  </div>\n</div>";});

this["app"]["templates"]["fullstory"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers; data = data || {};
  var stack1, stack2, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, foundHelper;
  buffer += "\n<div>\n  <h1>";
  foundHelper = helpers.title;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.title; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "</h1>\n  <p>";
  foundHelper = helpers.description;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.description; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "</p>\n  <date>";
  foundHelper = helpers.date;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.date; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "</date>\n  <div class=\"story-item-container\"><img src=\"";
  foundHelper = helpers.image;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.image; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "\"/></div>\n  <div class=\"audio-item-container\">\n    <p>audio placeholder</p>\n  </div>\n</div>";
  return buffer;}

  stack1 = depth0.data;
  stack2 = {};
  stack1 = helpers.each.call(depth0, stack1, {hash:stack2,inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { return stack1; }
  else { return ''; }});

this["app"]["templates"]["stories"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers; data = data || {};
  


  return "\n<div id=\"storyItemsWrapper\"></div>";});

this["app"]["templates"]["story"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, foundHelper, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "\n<div data-record=\"";
  foundHelper = helpers.id;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.id; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "\" class=\"storyItemWrap\">\n  <div class=\"storyItem\"><img src=\"";
  foundHelper = helpers.mainImg;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.mainImg; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "\" class=\"mainImage\"/>\n    <div class=\"clear\"></div>\n  </div>\n  <div class=\"storyItemContent\">\n    <h4>";
  foundHelper = helpers.title;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.title; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "</h4>\n    <p>";
  foundHelper = helpers.description;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.description; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "</p>\n    <p>";
  foundHelper = helpers.date;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.date; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "</p>\n  </div>\n</div>";
  return buffer;});

this["app"]["templates"]["partials/nav"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers; data = data || {};
  


  return "\n<div></div>";});

this["app"]["templates"]["partials/navItem"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, foundHelper, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "\n<li data-story=\"";
  foundHelper = helpers.id;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.id; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "\" class=\"navItem\"></li>";
  return buffer;});