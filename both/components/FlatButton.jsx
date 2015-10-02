FlatButton = React.createClass({
  render() {
    return (
      <a className={this.props.btnClass}>{this.props.children}</a>
    );
  }
});
