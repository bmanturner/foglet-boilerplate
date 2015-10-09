Meteor.startup(() => {
  //Needed for onTouchTap
  //Can go away when react 1.0 release
  //Check this repo:
  //https://github.com/zilverline/react-tap-event-plugin
  injectTapEventPlugin();
});

// https://github.com/callemall/material-ui/blob/master/src/styles/theme-manager.js
const fogletTheme = {
  spacing: Spacing,
  fontFamily: 'Roboto, sans-serif',
  palette: {
    primary1Color: Colors.lightGreen500,
    primary2Color: Colors.lightGreen700,
    primary3Color: Colors.lightBlack,
    accent1Color: Colors.cyan500,
    accent2Color: Colors.grey100,
    accent3Color: Colors.grey500,
    textColor: Colors.darkBlack,
    alternateTextColor: Colors.white,
    canvasColor: Colors.white,
    borderColor: Colors.grey300,
    disabledColor: ColorManipulator.fade(Colors.darkBlack, 0.3),
  }
};

MainLayout = React.createClass({
  mixins: [ReactMeteorData],
  getMeteorData() {
    return {
      currentRouteName: FlowRouter.getRouteName()
    }
  },
  //the key passed through context must be called "muiTheme"
  childContextTypes : {
    muiTheme: React.PropTypes.object,
  },
  getChildContext() {
    return {
      muiTheme: ThemeManager.getMuiTheme(fogletTheme),
    };
  },
  render() {
    DocHead.setTitle('Foglet | ' + this.data.currentRouteName);

    return  (
      <div>
        <header>
          <Header />
        </header>
        <main>
          {this.props.main()}
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    );
  },
  componentWillMount: () => {
    // BEGIN DOCHEAD https://github.com/kadirahq/meteor-dochead/
    DocHead.addMeta({name: 'viewport', content: 'width=device-width, initial-scale=1.0, user-scalable=yes'});
    // icons and markup generated using http://realfavicongenerator.net/
    DocHead.addMeta({name: 'msapplication-TileColor', content: fogletTheme.palette.primary1Color});
    DocHead.addMeta({name: 'msapplication-TileImage', content: 'images/favicons/mstile-144x144.png'});
    DocHead.addMeta({name: 'theme-color', content: fogletTheme.palette.primary1Color});
    DocHead.addLink({rel: 'shortcut icon', href: 'images/favicons/favicon.ico'});
    DocHead.addLink({rel: 'apple-touch-icon', type: '57x57', href: 'images/favicons/apple-touch-icon-57x57.png'});
    DocHead.addLink({rel: 'apple-touch-icon', type: '60x60', href: 'images/favicons/apple-touch-icon-60x60.png'});
    DocHead.addLink({rel: 'apple-touch-icon', type: '72x72', href: 'images/favicons/apple-touch-icon-72x72.png'});
    DocHead.addLink({rel: 'apple-touch-icon', type: '76x76', href: 'images/favicons/apple-touch-icon-76x76.png'});
    DocHead.addLink({rel: 'apple-touch-icon', type: '114x114', href: 'images/favicons/apple-touch-icon-114x114.png'});
    DocHead.addLink({rel: 'apple-touch-icon', type: '120x120', href: 'images/favicons/apple-touch-icon-120x120.png'});
    DocHead.addLink({rel: 'apple-touch-icon', type: '144x144', href: 'images/favicons/apple-touch-icon-144x144.png'});
    DocHead.addLink({rel: 'apple-touch-icon', type: '152x152', href: 'images/favicons/apple-touch-icon-152x152.png'});
    DocHead.addLink({rel: 'apple-touch-icon', type: '180x180', href: 'images/favicons/apple-touch-icon-180x180.png'});
    DocHead.addLink({rel: 'icon', type: 'image/png', href: 'images/favicons/favicon-16x16.png', sizes: '16x16'});
    DocHead.addLink({rel: 'icon', type: 'image/png', href: 'images/favicons/favicon-32x32.png', sizes: '32x32'});
    DocHead.addLink({rel: 'icon', type: 'image/png', href: 'images/favicons/favicon-194x194.png', sizes: '194x194'});
    DocHead.addLink({rel: 'icon', type: 'image/png', href: 'images/favicons/favicon-96x96.png', sizes: '96x96'});
    DocHead.addLink({rel: 'icon', type: 'image/png', href: 'images/favicons/android-chrome-192x192.png', sizes: '192x192'});
    DocHead.addLink({rel: 'manifest', href: 'images/favicons/manifest.json'});
    // END DOCHEAD
  }
});
