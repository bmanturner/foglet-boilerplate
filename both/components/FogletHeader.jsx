var {RaisedButton} = MUI;

FogletHeader = React.createClass({
  render() {
    return  (
      <div>
        <RaisedButton
          label="Open Nav"
          onClick={this._openLeftNav} />
      </div>
    );
  },
  _openLeftNav: (event) => {
    console.log('thing');
  }
});
