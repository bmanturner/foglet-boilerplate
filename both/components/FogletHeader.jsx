var {RaisedButton,LeftNav,MenuItem} = MUI;

FogletHeader = React.createClass({
  render() {
    var menuItems = [
      { route: 'get-started', text: 'Get Started' },
      { route: 'customization', text: 'Customization' },
      { route: 'components', text: 'Components' },
      { type: MenuItem.Types.SUBHEADER, text: 'Resources' },
      {
         type: MenuItem.Types.LINK,
         payload: 'https://github.com/callemall/material-ui',
         text: 'GitHub'
      },
      {
         text: 'Disabled',
         disabled: true
      },
      {
         type: MenuItem.Types.LINK,
         payload: 'https://www.google.com',
         text: 'Disabled Link',
         disabled: true
      },
    ];
    return  <div>
        <LeftNav ref="leftNav" docked={false} menuItems={menuItems} />
        <RaisedButton
          label="Open Nav"
          onClick={this._openLeftNav} />
      </div>
  },
  _openLeftNav() {
    this.refs.leftNav.toggle();
  },
});
