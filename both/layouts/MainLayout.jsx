MainLayout = React.createClass({
  mixins: [ReactMeteorData],
  getMeteorData() {
    return {
      currentRouteName: FlowRouter.getRouteName()
    }
  },
  render() {
    DocHead.setTitle('Foglet | ' + this.data.currentRouteName);

    return  (
      <div>
        <FogletHeader />
        <div>
          {this.props.main()}
        </div>
      </div>
    );
  },
  componentWillMount: () => {
    // BEGIN DOCHEAD https://github.com/kadirahq/meteor-dochead/
    DocHead.addMeta({name: 'viewport', content: 'width=device-width, initial-scale=1.0, user-scalable=yes'});
    DocHead.addLink({rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons'});
    // icons and markup generated using http://realfavicongenerator.net/
    DocHead.addMeta({name: 'msapplication-TileColor', content: '#603cba'});
    DocHead.addMeta({name: 'msapplication-TileImage', content: 'images/favicons/mstile-144x144.png'});
    DocHead.addMeta({name: 'theme-color', content: '#000000'});
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
