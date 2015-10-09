LoginRegisterForm = React.createClass({
  mixins: [ReactMeteorData],
  getMeteorData() {
    return {
      currentUser: Meteor.user()
    }
  },
  contextTypes: {
    muiTheme: React.PropTypes.object,
  },
  //for passing default theme context to children
  childContextTypes: {
    muiTheme: React.PropTypes.object,
  },
  getChildContext () {
    return {
      muiTheme: this.state.muiTheme,
    };
  },
  getInitialState() {
    return {
      muiTheme: this.context.muiTheme,
      registerNewUser: false
    };
  },
  componentWillReceiveProps(nextProps, nextContext) {
    let newMuiTheme = nextContext.muiTheme ? nextContext.muiTheme : this.state.muiTheme;
    this.setState({ muiTheme: newMuiTheme });
  },
  render() {
    // under the impression this keeps SSR from pushing both forms to client on load
    // register form should only load once the state changes
    let registerForm = this.state.registerNewUser ? <RegisterForm /> : '';
    let loginForm = this.state.registerNewUser ? '' : <LoginForm />;

    if (this.data.currentUser) {
      return <p>You are already logged in</p>
    } else {
      return (
        <Card>
          <Tabs>
            <Tab label="Login" onActive={this._showLoginForm}>
              {loginForm}
            </Tab>
            <Tab label="Register" onActive={this._showRegisterForm}>
              {registerForm}
            </Tab>
          </Tabs>
        </Card>
      );
    }
  },
  _showLoginForm() {
    if (this.state.registerNewUser) {
      this.setState({ registerNewUser: false });
    }
  },
  _showRegisterForm() {
    if (!this.state.registerNewUser) {
      this.setState({ registerNewUser: true });
    }
  }
});
