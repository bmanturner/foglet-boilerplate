Meteor.startup(() => {
  BrowserPolicy.content.allowOriginForAll("https://*.googleapis.com");
  BrowserPolicy.content.allowOriginForAll("https://*.gstatic.com");
});
