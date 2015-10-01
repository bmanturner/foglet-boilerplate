var {AppBar, LeftNav} = MUI;

// AppBar and LeftNav are about to receive a composability overhaul
// I won't attempt making custom MenuItem components until then
// [AppBar: https://github.com/callemall/material-ui/issues/773]
// [LeftNav: https://github.com/callemall/material-ui/issues/413]

FogletHeader = React.createClass({
  render() {
    let menuItems = [
      { route: '/test', text: 'Test' },
      { route: '/login-required', text: 'Login Required' },
    ];
    return  (
      <div>
        <AppBar
          title="Foglet"
          onLeftIconButtonTouchTap={this._toggleLeftNav} />
        <LeftNav
          ref="leftNav"
          docked={false}
          menuItems={menuItems}
          onChange={this._handleNavMenuItem} />
      </div>
    );
  },
  _toggleLeftNav() {
    this.refs.leftNav.toggle();
  },
  _handleNavMenuItem(e, selectedIndex, menuItem) {
    FlowRouter.go(menuItem.route);
  }
});
