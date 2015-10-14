LoginForm = React.createClass({
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
      usernameErrTxt: null,
      passwordErrTxt: null,
      snackbarMsg: ' ',
      isLoggingIn: false
    };
  },
  componentWillReceiveProps(nextProps, nextContext) {
    let newMuiTheme = nextContext.muiTheme ? nextContext.muiTheme : this.state.muiTheme;
    this.setState({ muiTheme: newMuiTheme });
  },
  componentDidMount() {
    this.refs.username.focus();
  },
  render() {
    let {
      usernameErrTxt,
      passwordErrTxt,
      snackbarMsg,
      isLoggingIn
    } = this.state;

    return (<div>
      <CardText>
        <div className="row">
          <div className="col-xs-12">
            <TextField ref="username" fullWidth={true} errorText={usernameErrTxt} floatingLabelText="Username / Email" type="text" />
          </div>
          <div className="col-xs-12">
            <TextField ref="password" fullWidth={true} errorText={passwordErrTxt} floatingLabelText="Password" type="password" />
          </div>
        </div>
      </CardText>
      <CardActions>
        <RaisedButton ref="submitBtn" label="Login" onClick={this._loginUser} fullWidth={true} primary={true} />
      </CardActions>
    </div>);
  },
  _loginUser(e) {
    let {
      username,
      password,
      snackbar
    } = this.refs;

    if (username.getValue() && password.getValue()) {
      this.setState({ isLoggingIn: true });
      this.setState({ usernameErrTxt: null });
      this.setState({ passwordErrTxt: null });

      Meteor.loginWithPassword(username.getValue(), password.getValue(), err => {
        if (err) {
          this.setState({ isLoggingIn: false });
          if (err.reason === 'Incorrect password')
            this.setState({ passwordErrTxt: err.reason });
          else
            this.setState({ usernameErrTxt: err.reason });
        } else {
          // TODO redirect based on location params
          FlowRouter.go('/');
        }
      });
    } else {
      if (!username.getValue())
        this.setState({ usernameErrTxt: 'Username or email required'});
      else if (username.getValue())
        this.setState({ usernameErrTxt: null });

      if (!password.getValue())
        this.setState({ passwordErrTxt: 'Password required'});
      else if (password.getValue())
        this.setState({ passwordErrTxt: null });
    }
  }
});
