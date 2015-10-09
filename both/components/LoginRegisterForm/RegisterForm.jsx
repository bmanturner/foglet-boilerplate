RegisterForm = React.createClass({
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
      emailMatch: false
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
    return (<div>
        <CardText>
        <div className="row">
          <div className="col-xs-12">
            <TextField ref="username" fullWidth={true} floatingLabelText="Username" type="text" />
          </div>
          <div className="col-xs-12">
            <TextField ref="email" fullWidth={true} onBlur={this._checkEmailMatch} floatingLabelText="Email" type="email" />
          </div>
          <div className="col-xs-12">
            <TextField ref="verifyEmail" fullWidth={true} onChange={this._checkEmailMatch} floatingLabelText="Verify Email" type="email" />
          </div>
          <div className="col-xs-12 col-sm-6">
            <TextField ref="firstName" fullWidth={true} floatingLabelText="First Name" hintText="(Optional)" type="text" />
          </div>
          <div className="col-xs-12 col-sm-6">
            <TextField ref="lastName" fullWidth={true} floatingLabelText="Last Name" hintText="(Optional)" type="text" />
          </div>
          <div className="col-xs-12 col-sm-6">
            <TextField ref="password" fullWidth={true} onBlur={this._checkPasswordMatch} floatingLabelText="Password" type="password" />
          </div>
          <div className="col-xs-12 col-sm-6">
            <TextField ref="verifyPassword" fullWidth={true} onChange={this._checkPasswordMatch} floatingLabelText="Verify Password" type="password" />
          </div>
        </div>
      </CardText>
      <CardActions>
        <RaisedButton label="Register" fullWidth={true} primary={true} />
      </CardActions>
    </div>);
  },
  _checkEmailMatch() {
    if (this.refs.verifyEmail.getValue() !== this.refs.email.getValue()) {
      this.refs.verifyEmail.setErrorText("Email does not match");
    } else {
      this.refs.verifyEmail.setErrorText(null);
    }
  },
  _checkPasswordMatch() {
    if (this.refs.verifyPassword.getValue() !== this.refs.password.getValue()) {
      this.refs.verifyPassword.setErrorText("Password does not match");
    } else {
      this.refs.verifyPassword.setErrorText(null);
    }
  }
});
