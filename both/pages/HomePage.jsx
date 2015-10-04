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
        <div className="divider"></div>
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
        <div className="divider"></div>
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
        <div className="divider"></div>
        <div className="section">
          <h2 className="header materialize-theme-text text-lighten-1">Dropdown</h2>
            <div className="row">
              <div className="col m6"><a className='dropdown-button btn btn-block' href='#' data-activates='dropdown1' data-constrainwidth='false'>Drop Me!</a></div>
              <div className="col m6"><a className='dropdown-button btn btn-block' href='#' data-activates='dropdown2'>Drop Me!</a></div>
            </div>
            <ul id='dropdown1' className='dropdown-content'>
              <li><a href="#!">one</a></li>
              <li><a href="#!">two</a></li>
              <li className="divider"></li>
              <li><a href="#!">three</a></li>
            </ul>
            <ul id='dropdown2' className='dropdown-content'>
              <li><a href="#!">one<span className="badge colored purple">1</span></a></li>
              <li><a href="#!">two</a></li>
              <li className="divider"></li>
              <li><a href="#!">three</a></li>
            </ul>
        </div>
        <div className="divider"></div>
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
                <div className="col s12 light-green">This div is 12-columns wide</div>
                <div className="col s6 light-blue">This div is 6-columns wide</div>
                <div className="col s6 pink">This div is 6-columns wide</div>
                <div className="col s6 offset-s3 lime">6-columns (offset-by-3)</div>
              </div>
            </div>
          </div>
        </div>
        <div className="divider"></div>
        <div className="section">
          <h2 className="header materialize-theme-text text-lighten-1">Collapsible</h2>
          <div className="card hoverable">
            <div className="card-content">
              <span className="card-title black-text">Normal</span>
              <ul className="collapsible" data-collapsible="accordion">
                <li>
                  <div className="collapsible-header"><i className="material-icons">filter_drama</i>First</div>
                  <div className="collapsible-body"><p>Lorem ipsum dolor sit amet.</p></div>
                </li>
                <li>
                  <div className="collapsible-header"><i className="material-icons">place</i>Second</div>
                  <div className="collapsible-body"><p>Lorem ipsum dolor sit amet.</p></div>
                </li>
                <li>
                  <div className="collapsible-header"><i className="material-icons">whatshot</i>Third</div>
                  <div className="collapsible-body"><p>Lorem ipsum dolor sit amet.</p></div>
                </li>
              </ul>
            </div>
          </div>
          <div className="card hoverable">
            <div className="card-content">
              <span className="card-title black-text">Popout</span>
              <ul className="collapsible popout" data-collapsible="accordion">
                <li>
                  <div className="collapsible-header"><i className="material-icons">filter_drama</i>First</div>
                  <div className="collapsible-body"><p>Lorem ipsum dolor sit amet.</p></div>
                </li>
                <li>
                  <div className="collapsible-header"><i className="material-icons">place</i>Second</div>
                  <div className="collapsible-body"><p>Lorem ipsum dolor sit amet.</p></div>
                </li>
                <li>
                  <div className="collapsible-header"><i className="material-icons">whatshot</i>Third</div>
                  <div className="collapsible-body"><p>Lorem ipsum dolor sit amet.</p></div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="divider"></div>
        <div className="section">
          <h2 className="header materialize-theme-text text-lighten-1">Tooltips</h2>
          <div className="card hoverable">
            <div className="card-content">
              <div className="row">
                <div className="col s3 center-align"><a className="btn tooltipped" data-position="top" data-tooltip="I am tooltip">Top</a></div>
                <div className="col s3 center-align"><a className="btn tooltipped" data-position="bottom" data-tooltip="I am tooltip">Bottom</a></div>
                <div className="col s3 center-align"><a className="btn tooltipped" data-position="left" data-tooltip="I am tooltip">Left</a></div>
                <div className="col s3 center-align"><a className="btn tooltipped" data-position="right" data-tooltip="I am tooltip">Right</a></div>
              </div>
            </div>
          </div>
        </div>
        <div className="divider"></div>
        <div className="section">
          <h2 className="header materialize-theme-text text-lighten-1">Collection</h2>
          <div className="card hoverable">
            <div className="card-content">
              <span className="card-title black-text">Basic</span>
              <ul className="collection">
                <li className="collection-item">Thing 1<span className="badge">1</span></li>
                <li className="collection-item">Thing 2<span className="badge colored">4</span></li>
                <li className="collection-item">Thing 3</li>
                <li className="collection-item">Thing 4</li>
              </ul>
            </div>
          </div>
          <div className="card hoverable">
            <div className="card-content">
              <span className="card-title black-text">Links</span>
              <div className="collection">
                <a href="#!" className="collection-item">Link 1<span className="badge">1</span></a>
                <a href="#!" className="collection-item">Link 2<span className="badge colored">4</span></a>
                <a href="#!" className="collection-item active">Link 3</a>
                <a href="#!" className="collection-item">Link 4</a>
              </div>
            </div>
          </div>
          <div className="card hoverable">
            <div className="card-content">
              <span className="card-title black-text">Header</span>
              <ul className="collection with-header">
                <li className="collection-header"><h4>Fruit</h4></li>
                <li className="collection-item">Apple</li>
                <li className="collection-item">Banana</li>
                <li className="collection-item">Mango</li>
              </ul>
            </div>
          </div>
          <div className="card hoverable">
            <div className="card-content">
              <span className="card-title black-text">Secondary</span>
              <ul className="collection with-header">
                <li className="collection-header"><h4>Email</h4></li>
                <li className="collection-item"><div>abc@xyz.com<a href="#!" className="secondary-content"><i className="material-icons">send</i></a></div></li>
                <li className="collection-item"><div>def@xyz.com<a href="#!" className="secondary-content"><i className="material-icons">send</i></a></div></li>
                <li className="collection-item"><div>ghi@xyz.com<a href="#!" className="secondary-content"><i className="material-icons">send</i></a></div></li>
                <li className="collection-item"><div>jkl@xyz.com<a href="#!" className="secondary-content"><i className="material-icons">send</i></a></div></li>
              </ul>
            </div>
          </div>
          <div className="card hoverable">
            <div className="card-content">
              <span className="card-title black-text">Complex Content</span>
              <ul className="collection">
                <li className="collection-item avatar">
                  <img src="images/avatar.jpg" alt="" className="circle" />
                  <span className="title">Title</span>
                  <p>First Line <br />
                     Second Line
                  </p>
                  <a href="#!" className="secondary-content"><i className="material-icons">grade</i></a>
                </li>
                <li className="collection-item avatar">
                  <i className="material-icons circle">folder</i>
                  <span className="title">Title</span>
                  <p>First Line <br />
                     Second Line
                  </p>
                  <a href="#!" className="secondary-content"><i className="material-icons">grade</i></a>
                </li>
                <li className="collection-item avatar">
                  <i className="material-icons circle green">insert_chart</i>
                  <span className="title">Title</span>
                  <p>First Line <br />
                     Second Line
                  </p>
                  <a href="#!" className="secondary-content"><i className="material-icons">grade</i></a>
                </li>
                <li className="collection-item avatar">
                  <i className="material-icons circle red">play_arrow</i>
                  <span className="title">Title</span>
                  <p>First Line <br />
                     Second Line
                  </p>
                  <a href="#!" className="secondary-content"><i className="material-icons">grade</i></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="divider"></div>
        <div className="section">
          <h2 className="header materialize-theme-text text-lighten-1">Chips</h2>
          <div className="card hoverable">
            <div className="card-content">
              <div className="chip teal lighten-2 z-depth-1">
                <img src="images/avatar.jpg" alt="Contact Person" />
                Brendan Turner
              </div>
              <div className="chip">
                Tag<i className="material-icons">close</i>
              </div>
            </div>
          </div>
        </div>
        <div className="divider"></div>
        <div className="section">
          <h2 className="header materialize-theme-text text-lighten-1">Pagination</h2>
          <div className="card hoverable">
            <div className="card-content">
              <ul className="pagination">
                <li className="disabled"><a href="#!"><i className="material-icons">chevron_left</i></a></li>
                <li className="active"><a href="#!">1</a></li>
                <li className="waves-effect"><a href="#!">2</a></li>
                <li className="waves-effect"><a href="#!">3</a></li>
                <li className="waves-effect"><a href="#!">4</a></li>
                <li className="waves-effect"><a href="#!">5</a></li>
                <li className="waves-effect"><a href="#!"><i className="material-icons">chevron_right</i></a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="divider"></div>
        <div className="section">
          <h2 className="header materialize-theme-text text-lighten-1">Tabs</h2>
          <div className="card hoverable">
            <div className="card-content">
              <div className="row">
                <div className="col s12">
                  <ul className="tabs">
                    <li className="tab col s3"><a href="#test1">Test 1</a></li>
                    <li className="tab col s3"><a className="active" href="#test2">Test 2</a></li>
                    <li className="tab col s3 disabled"><a href="#test3">Disabled Tab</a></li>
                    <li className="tab col s3"><a href="#test4">Test 4</a></li>
                  </ul>
                </div>
                <div id="test1" className="col s12">Test 1</div>
                <div id="test2" className="col s12">Test 2</div>
                <div id="test3" className="col s12">Test 3</div>
                <div id="test4" className="col s12">Test 4</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
});
