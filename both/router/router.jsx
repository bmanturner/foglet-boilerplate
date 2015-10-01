// https://github.com/kadirahq/flow-router

if (Meteor.isServer) {
  // loads html before scripts
  FlowRouter.setDeferScriptLoading(true);
}

FlowRouter.route('/', {
  name: 'Home',
  action: () => {
    ReactLayout.render(MainLayout, {
      main() { return <HomePage />; }
    });
  }
});

FlowRouter.route('/test', {
  name: 'Test',
  action: () => {
    ReactLayout.render(MainLayout, {
      main() { return <p>tada</p>; }
    });
  }
});

FlowRouter.route('/login-required', {
  name: 'Login Required',
  triggersEnter: [loginRequired],
  action: () => {
    ReactLayout.render(MainLayout, {
      main() { return <p>You shouldn't see me.</p>; }
    });
  }
});

FlowRouter.notFound = {
  name: '404 Not Found',
  action: () => {
    ReactLayout.render(MainLayout, {
      main() { return <p>404</p> }
    });
  }
};

function loginRequired(context, redirect) {
  if (!Meteor.user()) {
    redirect('/');
  }
}
