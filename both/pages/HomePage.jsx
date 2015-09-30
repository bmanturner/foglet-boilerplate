var {RaisedButton} = mui;

HomePage = React.createClass({
  render() {
    return  <div className="row">
              <div className="col-sm-4">
                <RaisedButton label="Button 1" fullWidth={true} />
              </div>
              <div className="col-sm-4">
                <RaisedButton label="Button 2" fullWidth={true} />
              </div>
              <div className="col-sm-4">
                <RaisedButton label="Button 3" fullWidth={true} />
              </div>
            </div>
  }
});
