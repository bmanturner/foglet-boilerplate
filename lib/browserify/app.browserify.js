// www.material-ui.com
// for developing it's easier to load the entire material-ui library
// but for production individual components should be loaded instead
// ex: RaisedButton = require('material-ui/lib/raised-button')
//     AppBar = require('material-ui/lib/app-bar'), etc
MUI = require('material-ui');

//Needed for onTouchTap
//Can go away when react 1.0 release
//Check this repo:
//https://github.com/zilverline/react-tap-event-plugin
injectTapEventPlugin = require('react-tap-event-plugin');
injectTapEventPlugin();
React.initializeTouchEvents(true)
