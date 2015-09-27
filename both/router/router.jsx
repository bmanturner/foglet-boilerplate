// https://github.com/kadirahq/flow-router

if (Meteor.isServer) {
  // loads html before scripts
  FlowRouter.setDeferScriptLoading(true);
}

FlowRouter.route('/', {
  name: 'Home',
  action: () => {
    ReactLayout.render(MainLayout, {
      main: <a href="/test">Button</a>
    });
  }
});

FlowRouter.route('/test', {
  name: 'Test',
  action: () => {
    ReactLayout.render(MainLayout, {
      main: <a href="/">Button</a>
    });
  }
});
