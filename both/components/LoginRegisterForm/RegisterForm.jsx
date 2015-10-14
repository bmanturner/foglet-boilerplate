RegisterForm = React.createClass({
  contextTypes: {
    muiTheme: React.PropTypes.object,
  },
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
      emailErrTxt: null,
      verifyEmailErrTxt: null,
      passwordErrTxt: null,
      verifyPasswordErrTxt: null,
      snackbarMsg: ' ',
      isRegistering: false
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
      emailErrTxt,
      verifyEmailErrTxt,
      passwordErrTxt,
      verifyPasswordErrTxt,
      snackbarMsg,
      isRegistering
    } = this.state;

    let disableButton;
    if (isRegistering || usernameErrTxt || emailErrTxt || verifyEmailErrTxt || passwordErrTxt || verifyPasswordErrTxt)
      disableButton = true;

    return (<div>
      <CardText>
        <div className="row">
          <div className="col-xs-12">
            <TextField ref="username" fullWidth={true} errorText={usernameErrTxt} onBlur={this._validateUsername} floatingLabelText="Username" type="text" />
          </div>
          <div className="col-xs-12">
            <TextField ref="email" fullWidth={true} errorText={emailErrTxt} onBlur={this._validateEmail} floatingLabelText="Email" type="email" />
          </div>
          <div className="col-xs-12">
            <TextField ref="verifyEmail" fullWidth={true} errorText={verifyEmailErrTxt} onChange={this._checkEmailMatch} floatingLabelText="Verify Email" type="email" />
          </div>
          <div className="col-xs-12 col-sm-6">
            <TextField ref="password" fullWidth={true} errorText={passwordErrTxt} onBlur={this._validatePassword} floatingLabelText="Password" type="password" />
          </div>
          <div className="col-xs-12 col-sm-6">
            <TextField ref="verifyPassword" fullWidth={true} errorText={verifyPasswordErrTxt} onChange={this._checkPasswordMatch} floatingLabelText="Verify Password" type="password" />
          </div>
        </div>
      </CardText>
      <CardActions>
        <RaisedButton ref="submitBtn" disabled={disableButton} label="Register" onClick={this._registerUser} fullWidth={true} primary={true} />
      </CardActions>

      <Snackbar ref='snackbar' message={snackbarMsg} autoHideDuration={2500} action="Ok" onActionTouchTap={this._dismissSnackbar} />
    </div>);
  },
  _registerUser(e) {
    let {
      username,
      email,
      password,
      snackbar
    } = this.refs;

    if (this._checkEmailMatch && this._validatePassword && username.getValue().length >= 3 && email.getValue() && email.getValue().indexOf('@') !== -1) {
      this.setState({ isRegistering: true });

      let user = {
        username: username.getValue().replace(/^\s*|\s*$/g, ""),
        email: email.getValue().replace(/^\s*|\s*$/g, ""),
        password: password.getValue()
      };

      Accounts.createUser(user, err => {
        if (err) {
          this.setState({ isRegistering: false });
          this.setState({ snackbarMsg: err.message });
          snackbar.show()
        } else {
          // TODO redirect based on location params
          FlowRouter.go('/');
        }
      });
    } else {
      return;
    }
  },
  _validateUsername() {
    var username = this.refs.username.getValue();
    if (username.length === 0) return;
    if (username.length < 3) {
      this.setState({ usernameErrTxt: 'Must be at least 3 characters'});
    } else {
      Meteor.call('doesUsernameExist', username, (err, res) => {
        if (res)
          this.setState({ usernameErrTxt: 'Username already taken!' });
        else if (err)
          this.setState({ usernameErrTxt: err.message });
        else {
          this.setState({ usernameErrTxt: null });
        }
      });
    }
  },
  _validateEmail() {
    var email = this.refs.email.getValue();
    if (email.length === 0) return;
    if (email && email.indexOf('@') !== -1) {
      Meteor.call('doesEmailExist', email, (err, res) => {
        if (res)
          this.setState({ emailErrTxt: 'Email is already registered!' });
        else if (err)
          this.setState({ emailErrTxt: err.message });
        else {
          this.setState({ emailErrTxt: null });
          this._checkEmailMatch();
        }
      });
    } else {
      this.setState({ emailErrTxt: 'Invalid email' });
    }
  },
  _checkEmailMatch() {
    if (this.refs.verifyEmail.getValue() !== this.refs.email.getValue())
      this.setState({ verifyEmailErrTxt: 'Email does not match' });
    else {
      this.setState({ verifyEmailErrTxt: null });
      return true;
    }
    return false;
  },
  _validatePassword() {
    if (this.refs.password.getValue().length <= 5)
      this.setState({ passwordErrTxt: 'Must be at least 6 characters' });
    else {
      this.setState({ passwordErrTxt: null });
      return this._checkPasswordMatch();
    }
    return false;
  },
  _checkPasswordMatch() {
    if (this.refs.verifyPassword.getValue() !== this.refs.password.getValue())
      this.setState({ verifyPasswordErrTxt: 'Password does not match' });
    else {
      this.setState({ verifyPasswordErrTxt: null });
      return true;
    }
    return false;
  },
  _dismissSnackbar() {
    this.refs.snackbar.dismiss();
  }
});
