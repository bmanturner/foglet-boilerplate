HomePage = React.createClass({
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
      muiTheme: this.context.muiTheme
    };
  },
  componentWillReceiveProps(nextProps, nextContext) {
    let newMuiTheme = nextContext.muiTheme ? nextContext.muiTheme : this.state.muiTheme;
    this.setState({ muiTheme: newMuiTheme });
  },
  render() {
    return  (
      <div className="container-fluid">
        <div className="row center-xs">
          <div className="col-xs-12 col-sm-8 col-md-6">
            <LoginRegisterForm />
          </div>
        </div>
      </div>
    );
  }
});
