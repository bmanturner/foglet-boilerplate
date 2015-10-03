HomePage = React.createClass({
  render() {
    return  (
      <div className="container">
        <div className="section">
          <h2 className="header materialize-theme-text text-lighten-1">Typography</h2>
          <p className="caption flow-text">The standard font Material Design uses is Roboto.</p>
          <div className="card hoverable">
            <div className="card-content">
              <h1>Header 1</h1>
              <h2>Header 2</h2>
              <h3>Header 3</h3>
              <h4>Header 4</h4>
              <h5>Header 5</h5>
              <h6>Header 6</h6>
              <blockquote>
                This is an example quotation that uses the blockquote tag.
              </blockquote>
            </div>
          </div>
        </div>

        <div className="section">
          <h2 className="header materialize-theme-text text-lighten-1">Tables</h2>
          <div className="card hoverable">
            <div className="card-content">
              <span className="card-title black-text">Borderless</span>
              <table>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Item Name</th>
                    <th>Item Price</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Alvin</td>
                    <td>Eclair</td>
                    <td>$0.87</td>
                  </tr>
                  <tr>
                    <td>Alan</td>
                    <td>Jellybean</td>
                    <td>$3.76</td>
                  </tr>
                  <tr>
                    <td>Jonathan</td>
                    <td>Lollipop</td>
                    <td>$7.00</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="card hoverable">
            <div className="card-content">
              <span className="card-title black-text">Bordered</span>
              <table className="bordered">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Item Name</th>
                    <th>Item Price</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Alvin</td>
                    <td>Eclair</td>
                    <td>$0.87</td>
                  </tr>
                  <tr>
                    <td>Alan</td>
                    <td>Jellybean</td>
                    <td>$3.76</td>
                  </tr>
                  <tr>
                    <td>Jonathan</td>
                    <td>Lollipop</td>
                    <td>$7.00</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="card hoverable">
            <div className="card-content">
              <span className="card-title black-text">Striped</span>
              <table className="striped">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Item Name</th>
                    <th>Item Price</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Alvin</td>
                    <td>Eclair</td>
                    <td>$0.87</td>
                  </tr>
                  <tr>
                    <td>Alan</td>
                    <td>Jellybean</td>
                    <td>$3.76</td>
                  </tr>
                  <tr>
                    <td>Jonathan</td>
                    <td>Lollipop</td>
                    <td>$7.00</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="card hoverable">
            <div className="card-content">
              <span className="card-title black-text">Highlight</span>
              <table className="highlight">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Item Name</th>
                    <th>Item Price</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Alvin</td>
                    <td>Eclair</td>
                    <td>$0.87</td>
                  </tr>
                  <tr>
                    <td>Alan</td>
                    <td>Jellybean</td>
                    <td>$3.76</td>
                  </tr>
                  <tr>
                    <td>Jonathan</td>
                    <td>Lollipop</td>
                    <td>$7.00</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="card hoverable">
            <div className="card-content">
              <span className="card-title black-text">Centered</span>
              <table className="centered">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Item Name</th>
                    <th>Item Price</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Alvin</td>
                    <td>Eclair</td>
                    <td>$0.87</td>
                  </tr>
                  <tr>
                    <td>Alan</td>
                    <td>Jellybean</td>
                    <td>$3.76</td>
                  </tr>
                  <tr>
                    <td>Jonathan</td>
                    <td>Lollipop</td>
                    <td>$7.00</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="card hoverable">
            <div className="card-content">
              <span className="card-title black-text">Responsive</span>
              <table className="responsive-table">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Item Name</th>
                    <th>Item Price</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Alvin</td>
                    <td>Eclair</td>
                    <td>$0.87</td>
                  </tr>
                  <tr>
                    <td>Alan</td>
                    <td>Jellybean</td>
                    <td>$3.76</td>
                  </tr>
                  <tr>
                    <td>Jonathan</td>
                    <td>Lollipop</td>
                    <td>$7.00</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="section">
          <h2 className="header materialize-theme-text text-lighten-1">Shadow</h2>
          <div className="card hoverable">
            <div className="card-content">
              <div className="row">
                <div className="col s12 m2">
                  <p className="z-depth-5">z-depth-5</p>
                </div>
                <div className="col s12 m2">
                  <p className="z-depth-4">z-depth-4</p>
                </div>
                <div className="col s12 m2">
                  <p className="z-depth-3">z-depth-3</p>
                </div>
                <div className="col s12 m2">
                  <p className="z-depth-2">z-depth-2</p>
                </div>
                <div className="col s12 m2">
                  <p className="z-depth-1">z-depth-1</p>
                </div>
                <div className="col s12 m2">
                  <p>no depth</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="section">
          <h2 className="header materialize-theme-text text-lighten-1">Grid</h2>
          <div className="card hoverable">
            <div className="card-content">
              <div className="row">
                <div className="col s1 amber">1</div>
                <div className="col s1 blue">2</div>
                <div className="col s1 brown">3</div>
                <div className="col s1 indigo">4</div>
                <div className="col s1 grey">5</div>
                <div className="col s1 purple">6</div>
                <div className="col s1 red">7</div>
                <div className="col s1 teal">8</div>
                <div className="col s1 yellow">9</div>
                <div className="col s1 blue-grey">10</div>
                <div className="col s1 deep-orange">11</div>
                <div className="col s1 deep-purple">12</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
});
