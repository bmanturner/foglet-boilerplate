// https://github.com/kadirahq/flow-router

if (Meteor.isServer) {
  // loads html before scripts
  FlowRouter.setDeferScriptLoading(true);
}

FlowRouter.route('/', {
  name: 'home',
  action: () => {
    ReactLayout.render(MainLayout, {
      title: 'Foglet'
    });
  }
});
