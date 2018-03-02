import React, {Component} from "react";

class NavBar extends Component{

    render(){
        return(
          <nav className="navbar px-navbar">
    
          <div className="navbar-header">
            <a className="navbar-brand px-demo-brand" href="index.html"><span className="px-demo-logo bg-primary"><span className="px-demo-logo-1"></span><span className="px-demo-logo-2"></span><span className="px-demo-logo-3"></span><span className="px-demo-logo-4"></span><span className="px-demo-logo-5"></span><span className="px-demo-logo-6"></span><span className="px-demo-logo-7"></span><span className="px-demo-logo-8"></span><span className="px-demo-logo-9"></span></span>PixelAdmin</a>
          </div>
          <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#px-demo-navbar-collapse" aria-expanded="false"><i className="navbar-toggle-icon"></i></button>
          <div className="collapse navbar-collapse" id="px-demo-navbar-collapse">
            <ul className="nav navbar-nav">
              <li className="dropdown">
                <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Categories</a>
                <div className="dropdown-multi-column">
                  <ul className="dropdown-menu dropdown-column col-md-4">
                    <li className="dropdown-header">Business</li>
                    <li><a href="#">Design &amp; Urban Ecologies</a></li>
                    <li><a href="#">Fine Art</a></li>
                    <li><a href="#">Fashion Design</a></li>
                    <li><a href="#">Strategic Design</a></li>
                  </ul>
                  
                </div>
              </li>

            </ul>

            <ul className="nav navbar-nav navbar-right">
              <li className="dropdown">
                <a href="https://stackoverflow.com" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
                  <i className="px-navbar-icon fa fa-bullhorn font-size-14"></i>
                  <span className="px-navbar-icon-label">Notifications</span>
                  <span className="px-navbar-label label label-success">5</span>
                </a>
                <div className="dropdown-menu p-a-0">
                  <div id="navbar-notifications" >
                    <div className="widget-notifications-item">
                      <div className="widget-notifications-title text-danger">SYSTEM</div>
                      <div className="widget-notifications-description"><strong>Error 500</strong>: Syntax error in index.php at line <strong>461</strong>.</div>
                      <div className="widget-notifications-date">12h ago</div>
                      <div className="widget-notifications-icon fa fa-hdd-o bg-danger"></div>
                    </div>

                    <div className="widget-notifications-item">
                      <div className="widget-notifications-title text-info">STORE</div>
                      <div className="widget-notifications-description">You have <strong>9</strong> new orders.</div>
                      <div className="widget-notifications-date">12h ago</div>
                      <div className="widget-notifications-icon fa fa-truck bg-info"></div>
                    </div>

                    <div className="widget-notifications-item">
                      <div className="widget-notifications-title text-default">CRON DAEMON</div>
                      <div className="widget-notifications-description">Job <strong>"Clean DB"</strong> has been completed.</div>
                      <div className="widget-notifications-date">12h ago</div>
                      <div className="widget-notifications-icon fa fa-clock-o bg-default"></div>
                    </div>

                    <div className="widget-notifications-item">
                      <div className="widget-notifications-title text-success">SYSTEM</div>
                      <div className="widget-notifications-description">Server <strong>up</strong>.</div>
                      <div className="widget-notifications-date">12h ago</div>
                      <div className="widget-notifications-icon fa fa-hdd-o bg-success"></div>
                    </div>

                    <div className="widget-notifications-item">
                      <div className="widget-notifications-title text-warning">SYSTEM</div>
                      <div className="widget-notifications-description"><strong>Warning</strong>: Processor load <strong>92%</strong>.</div>
                      <div className="widget-notifications-date">12h ago</div>
                      <div className="widget-notifications-icon fa fa-hdd-o bg-warning"></div>
                    </div>
                  </div>

                  <a href="#" className="widget-more-link">MORE NOTIFICATIONS</a>
                </div>
              </li>

              <li className="dropdown">
                <a href="https://google.com" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
                  <i className="px-navbar-icon fa fa-envelope font-size-14"></i>
                  <span className="px-navbar-icon-label">Income messages</span>
                  <span className="px-navbar-label label label-danger">8</span>
                </a>
                <div className="dropdown-menu p-a-0">
                  <div id="navbar-messages">
                    <div className="widget-messages-alt-item">
                      <img src="assets/demo/avatars/2.jpg" alt="" className="widget-messages-alt-avatar" />
                      <a href="#" className="widget-messages-alt-subject text-truncate">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</a>
                      <div className="widget-messages-alt-description">from <a href="#">Robert Jang</a></div>
                      <div className="widget-messages-alt-date">2h ago</div>
                    </div>

                    <div className="widget-messages-alt-item">
                      
                      <a href="#" className="widget-messages-alt-subject text-truncate">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</a>
                      <div className="widget-messages-alt-description">from <a href="#">Michelle Bortz</a></div>
                      <div className="widget-messages-alt-date">2h ago</div>
                    </div>

                    <div className="widget-messages-alt-item">
                      
                      <a href="#" className="widget-messages-alt-subject text-truncate">Lorem ipsum dolor sit amet.</a>
                      <div className="widget-messages-alt-description">from <a href="#">Timothy Owens</a></div>
                      <div className="widget-messages-alt-date">2h ago</div>
                    </div>

                    <div className="widget-messages-alt-item">
                      
                      <a href="#" className="widget-messages-alt-subject text-truncate">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</a>
                      <div className="widget-messages-alt-description">from <a href="#">Denise Steiner</a></div>
                      <div className="widget-messages-alt-date">2h ago</div>
                    </div>

                    <div className="widget-messages-alt-item">
                      
                      <a href="#" className="widget-messages-alt-subject text-truncate">Lorem ipsum dolor sit amet.</a>
                      <div className="widget-messages-alt-description">from <a href="#">Robert Jang</a></div>
                      <div className="widget-messages-alt-date">2h ago</div>
                    </div>

                    <div className="widget-messages-alt-item">
                      
                      <a href="#" className="widget-messages-alt-subject text-truncate">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</a>
                      <div className="widget-messages-alt-description">from <a href="#">Michelle Bortz</a></div>
                      <div className="widget-messages-alt-date">2h ago</div>
                    </div>

                    <div className="widget-messages-alt-item">
                      
                      <a href="#" className="widget-messages-alt-subject text-truncate">Lorem ipsum dolor sit amet.</a>
                      <div className="widget-messages-alt-description">from <a href="#">Timothy Owens</a></div>
                      <div className="widget-messages-alt-date">2h ago</div>
                    </div>

                    <div className="widget-messages-alt-item">
                      
                      <a href="#" className="widget-messages-alt-subject text-truncate">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</a>
                      <div className="widget-messages-alt-description">from <a href="#">Denise Steiner</a></div>
                      <div className="widget-messages-alt-date">2h ago</div>
                    </div>
                  </div>

                  <a href="#" className="widget-more-link">MORE MESSAGES</a>
                </div>
              </li>

              <li>
                <form className="navbar-form" role="search">
                  <div className="form-group">
                    <input type="text" className="form-control" placeholder="Search" />
                  </div>
                </form>
              </li>

              <li className="dropdown">
                <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
                  <img src="assets/demo/avatars/1.jpg" alt="" className="px-navbar-image" />
                  <span className="hidden-md">John Doe</span>
                </a>
                <ul className="dropdown-menu">
                  <li><a href="pages-profile-v2.html"><span className="label label-warning pull-xs-right"><i className="fa fa-asterisk"></i></span>Profile</a></li>
                  <li><a href="pages-account.html">Account</a></li>
                  <li><a href="pages-messages-list.html"><i className="dropdown-icon fa fa-envelope"></i>&nbsp;&nbsp;Messages</a></li>
                  <li className="divider"></li>
                  <li><a href="pages-signin-v1.html"><i className="dropdown-icon fa fa-power-off"></i>&nbsp;&nbsp;Log Out</a></li>
                </ul>
              </li>

            </ul>
          </div>
        </nav>
        );
    }
}

export default NavBar;