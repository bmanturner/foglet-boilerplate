Meteor.startup(function() {
  BrowserPolicy.content.allowOriginForAll("https://*.googleapis.com");
  BrowserPolicy.content.allowOriginForAll("https://*.gstatic.com");
});
