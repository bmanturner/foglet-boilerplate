HomePage = React.createClass({
  render() {
    return  (
      <div className="container">
        <div className="section">
          <h2 className="header theme-color-text text-lighten-1">Typography</h2>
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
        <div className="divider" />
        <div className="section">
          <h2 className="header theme-color-text text-lighten-1">Tables</h2>
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
        <div className="divider" />

        <div className="section">
          <h2 className="header theme-color-text text-lighten-1">Shadow</h2>
          <div className="card hoverable">
            <div className="card-content">
              <div className="row">
                <div className="col s2 center-align">
                  <p className="z-depth-5">5</p>
                </div>
                <div className="col s2 center-align">
                  <p className="z-depth-4">4</p>
                </div>
                <div className="col s2 center-align">
                  <p className="z-depth-3">3</p>
                </div>
                <div className="col s2 center-align">
                  <p className="z-depth-2">2</p>
                </div>
                <div className="col s2 center-align">
                  <p className="z-depth-1">1</p>
                </div>
                <div className="col s2 center-align">
                  <p>0</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="divider" />
        <div className="section">
          <h2 className="header theme-color-text text-lighten-1">Dropdown</h2>
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
        <div className="divider" />
        <div className="section">
          <h2 className="header theme-color-text text-lighten-1">Grid</h2>
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
        <div className="divider" />
        <div className="section">
          <h2 className="header theme-color-text text-lighten-1">Collapsible</h2>
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
        <div className="section">
          <h2 className="header theme-color-text text-lighten-1">Forms</h2>
          <div className="card hoverable">
            <div className="card-content">
              <span className="card-title black-text">Normal</span>
              <div className="row">
                <div className="input-field col s12 m6">
                  <input placeholder="Placeholder" id="first_name" type="text" className="validate" />
                  <label htmlFor="first_name">First Name</label>
                </div>
                <div className="input-field col s12 m6">
                  <input id="last_name" type="text" className="validate" />
                  <label htmlFor="last_name">Last Name</label>
                </div>
                <div className="input-field col s12">
                  <input disabled value="I am not editable" id="disabled" type="text" className="validate" />
                  <label htmlFor="disabled">Disabled</label>
                </div>
                <div className="input-field col s12 m6">
                  <input id="password" type="password" className="validate" />
                  <label htmlFor="password">Password</label>
                </div>
                <div className="input-field col s12 m6">
                  <input id="password" type="password" className="validate" />
                  <label htmlFor="password">Repeat Password</label>
                </div>
                <div className="input-field col s12">
                  <input id="email" type="email" className="validate" />
                  <label htmlFor="email">Email</label>
                </div>
              </div>
            </div>
          </div>
          <div className="card hoverable">
            <div className="card-content">
              <span className="card-title black-text">With Icons</span>
              <form>
                <div className="row">
                  <div className="input-field col s11">
                    <i className="material-icons prefix">account_circle</i>
                    <input id="icon_prefix" type="text" className="validate" />
                    <label htmlFor="icon_prefix">First Name</label>
                  </div>
                  <div className="input-field col s11">
                    <i className="material-icons prefix">phone</i>
                    <input id="icon_telephone" type="tel" className="validate" />
                    <label htmlFor="icon_telephone">Telephone</label>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="card hoverable">
            <div className="card-content">
              <span className="card-title black-text">Validation</span>
              <form>
                <div className="row">
                  <div className="input-field col s12">
                    <input id="email" type="email" className="validate" />
                    <label htmlFor="email" data-error="Not a valid email address" data-success="You got it, dude">Email</label>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="card hoverable">
            <div className="card-content">
              <span className="card-title black-text">Textarea</span>
              <form>
                <div className="row">
                  <div className="input-field col s12">
                    <textarea id="textarea1" className="materialize-textarea"></textarea>
                    <label htmlFor="textarea1">Textarea</label>
                  </div>
                  <div className="input-field col s10">
                    <i className="material-icons prefix">mode_edit</i>
                    <textarea id="icon_prefix2" className="materialize-textarea"></textarea>
                    <label htmlFor="icon_prefix2">Message</label>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="card hoverable">
            <div className="card-content">
              <span className="card-title black-text">Radio Buttons</span>
              <form>
                <p>
                  <input name="group1" type="radio" id="test1" />
                  <label htmlFor="test1">Option 1</label>
                </p>
                <p>
                  <input name="group1" type="radio" id="test2" />
                  <label htmlFor="test2">Option 2</label>
                </p>
                <p>
                  <input className="with-gap" name="group1" type="radio" id="test3"  />
                  <label htmlFor="test3">Option 3 (alt style)</label>
                </p>
                  <p>
                    <input name="group1" type="radio" id="test4" disabled="disabled" />
                    <label htmlFor="test4">Brown</label>
                </p>
              </form>
            </div>
          </div>
          <div className="card hoverable">
            <div className="card-content">
              <span className="card-title black-text">Checkboxes</span>
              <form action="#">
                <p>
                  <input type="checkbox" id="test5" />
                  <label htmlFor="test5">Option 1</label>
                </p>
                <p>
                  <input type="checkbox" id="test6" defaultChecked />
                  <label htmlFor="test6">Option 2</label>
                </p>
                <p>
                  <input type="checkbox" className="filled-in" id="filled-in-box" defaultChecked />
                  <label htmlFor="filled-in-box">Option 3</label>
                </p>
                <p>
                  <input type="checkbox" id="test7" defaultChecked disabled="disabled" />
                  <label htmlFor="test7">Option 4 (disabled)</label>
                </p>
                  <p>
                    <input type="checkbox" id="test8" disabled="disabled" />
                    <label htmlFor="test8">Option 5 (disabled)</label>
                </p>
              </form>
            </div>
          </div>
          <div className="card hoverable">
            <div className="card-content">
              <span className="card-title black-text">Switches</span>
              <div className="switch">
                <label>
                  Off
                  <input type="checkbox" />
                  <span className="lever"></span>
                  On
                </label>
              </div>
              <br />
              <div className="switch">
                <label>
                  Off
                  <input disabled type="checkbox" />
                  <span className="lever"></span>
                  On
                </label>
              </div>
            </div>
          </div>
          <div className="card hoverable">
            <div className="card-content">
              <span className="card-title black-text">Range</span>
              <form>
                <p className="range-field">
                  <input type="range" id="test5" min="0" max="100" />
                </p>
              </form>
            </div>
          </div>
        </div>
        <div className="divider" />
        <div className="hide-on-small-only">
          <div className="divider" />
          <div className="section">
            <h2 className="header theme-color-text text-lighten-1">Tooltips</h2>
            <div className="card hoverable">
              <div className="card-content">
                <div className="row">
                  <div className="col s6 m3 center-align"><a className="btn tooltipped" data-position="top" data-tooltip="I am tooltip">Top</a></div>
                  <div className="col s6 m3 center-align"><a className="btn tooltipped" data-position="bottom" data-tooltip="I am tooltip">Bottom</a></div>
                  <div className="col s6 m3 center-align"><a className="btn tooltipped" data-position="left" data-tooltip="I am tooltip">Left</a></div>
                  <div className="col s6 m3 center-align"><a className="btn tooltipped" data-position="right" data-tooltip="I am tooltip">Right</a></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="divider" />
        <div className="section">
          <h2 className="header theme-color-text text-lighten-1">Collection</h2>
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
        <div className="divider" />
        <div className="section">
          <h2 className="header theme-color-text text-lighten-1">Chips</h2>
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
        <div className="divider" />
        <div className="section">
          <h2 className="header theme-color-text text-lighten-1">Pagination</h2>
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
        <div className="divider" />
        <div className="section">
          <h2 className="header theme-color-text text-lighten-1">Tabs</h2>
          <div className="card hoverable">
            <div className="card-content">
              <div className="row">
                <div className="col s12">
                  <ul className="tabs">
                    <li className="tab col s4"><a href="#tab1">Tab 1</a></li>
                    <li className="tab col s4 disabled"><a href="#tab2">Disabled</a></li>
                    <li className="tab col s4"><a className="active" href="#tab3">Tab 3</a></li>
                  </ul>
                </div>
                <div id="tab1" className="col s12">Test 1</div>
                <div id="tab2" className="col s12">Test 2</div>
                <div id="tab3" className="col s12">Test 3</div>
              </div>
            </div>
          </div>
        </div>
        <div className="divider" />
        <div className="section">
          <h2 className="header theme-color-text text-lighten-1">Loading Indicators</h2>
          <div className="card hoverable">
            <div className="card-content">
              <span className="card-title black-text">Determinate</span>
              <div className="progress">
                <div className="determinate" style={{width: '70%'}}></div>
              </div>
              <span className="card-title black-text">Indeterminate</span>
              <div className="progress">
                <div className="indeterminate"></div>
              </div>
              <span className="card-title black-text">Spinners</span>
              <div className="row">
                <div className="col s6 m3 center-align">
                  <div className="preloader-wrapper big active">
                    <div className="spinner-layer spinner-blue-only">
                      <div className="circle-clipper left">
                        <div className="circle"></div>
                      </div><div className="gap-patch">
                        <div className="circle"></div>
                      </div><div className="circle-clipper right">
                        <div className="circle"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col s6 m3 center-align">
                  <div className="preloader-wrapper big active">
                    <div className="spinner-layer spinner-red-only">
                      <div className="circle-clipper left">
                        <div className="circle"></div>
                      </div><div className="gap-patch">
                        <div className="circle"></div>
                      </div><div className="circle-clipper right">
                        <div className="circle"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col s6 m3 center-align">
                  <div className="preloader-wrapper big active">
                    <div className="spinner-layer spinner-green-only">
                      <div className="circle-clipper left">
                        <div className="circle"></div>
                      </div><div className="gap-patch">
                        <div className="circle"></div>
                      </div><div className="circle-clipper right">
                        <div className="circle"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col s6 m3 center-align">
                  <div className="preloader-wrapper big active">
                    <div className="spinner-layer spinner-yellow-only">
                      <div className="circle-clipper left">
                        <div className="circle"></div>
                      </div><div className="gap-patch">
                        <div className="circle"></div>
                      </div><div className="circle-clipper right">
                        <div className="circle"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <br />
                <span className="card-title black-text">Color-changing</span>
                <div className="row">
                  <div className="col s12 center-align">
                    <div className="preloader-wrapper big active">
                      <div className="spinner-layer spinner-blue">
                        <div className="circle-clipper left">
                          <div className="circle"></div>
                        </div><div className="gap-patch">
                          <div className="circle"></div>
                        </div><div className="circle-clipper right">
                          <div className="circle"></div>
                        </div>
                      </div>
                      <div className="spinner-layer spinner-red">
                        <div className="circle-clipper left">
                          <div className="circle"></div>
                        </div><div className="gap-patch">
                          <div className="circle"></div>
                        </div><div className="circle-clipper right">
                          <div className="circle"></div>
                        </div>
                      </div>
                      <div className="spinner-layer spinner-yellow">
                        <div className="circle-clipper left">
                          <div className="circle"></div>
                        </div><div className="gap-patch">
                          <div className="circle"></div>
                        </div><div className="circle-clipper right">
                          <div className="circle"></div>
                        </div>
                      </div>
                      <div className="spinner-layer spinner-green">
                        <div className="circle-clipper left">
                          <div className="circle"></div>
                        </div><div className="gap-patch">
                          <div className="circle"></div>
                        </div><div className="circle-clipper right">
                          <div className="circle"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="divider" />
        <div className="section">
          <h2 className="header theme-color-text text-lighten-1">NavBars</h2>
          <nav>
            <div className="nav-wrapper">
              <a href="#" className="brand-logo">Logo</a>
              <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li><a href="#">Link 1</a></li>
                <li><a href="#">Link 2</a></li>
                <li><a href="#">Link 3</a></li>
              </ul>
            </div>
          </nav>
          <br />
          <nav>
            <div className="nav-wrapper">
              <a href="#" className="brand-logo right">Logo</a>
              <ul id="nav-mobile" className="left hide-on-med-and-down">
                <li><a href="#">Link 1</a></li>
                <li><a href="#">Link 2</a></li>
                <li><a href="#">Link 3</a></li>
              </ul>
            </div>
          </nav>
          <br />
          <nav>
            <div className="nav-wrapper">
              <a href="#" className="brand-logo center">Logo</a>
              <ul id="nav-mobile" className="left hide-on-med-and-down">
                <li><a href="#">Link 1</a></li>
                <li><a href="#">Link 2</a></li>
                <li><a href="#">Link 3</a></li>
              </ul>
            </div>
          </nav>
          <br />
          <nav>
            <div className="nav-wrapper">
              <a href="#!" className="brand-logo">Logo</a>
              <ul className="right hide-on-med-and-down">
                <li><a href="#">Link 1</a></li>
                <li><a href="#">Link 2</a></li>
                <li className="active"><a href="#">Link 3</a></li>
              </ul>
            </div>
          </nav>
          <br />
          <ul id="nav-dropdown1" className="dropdown-content">
            <li><a href="#!">one</a></li>
            <li><a href="#!">two</a></li>
            <li className="divider"></li>
            <li><a href="#!">three</a></li>
          </ul>
          <nav>
            <div className="nav-wrapper">
              <a href="#!" className="brand-logo">Logo</a>
              <ul className="right hide-on-med-and-down">
                <li><a href="#.html">Sass</a></li>
                <li><a href="#.html">Components</a></li>
                <li><a className="dropdown-button" href="#" data-activates="nav-dropdown1">Dropdown<i className="material-icons right">arrow_drop_down</i></a></li>
              </ul>
            </div>
          </nav>
          <br />
          <nav>
            <div className="nav-wrapper">
              <form>
                <div className="input-field">
                  <input id="search" type="search" required />
                  <label htmlFor="search"><i className="material-icons">search</i></label>
                  <i className="material-icons">close</i>
                </div>
              </form>
            </div>
          </nav>
        </div>
      </div>
    );
  }
});
