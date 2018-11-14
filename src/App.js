import React, { Component } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarNav,
  NavbarToggler,
  Collapse,
  NavItem,
  Footer,
  NavLink
} from "mdbreact";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";

import Routes from "./Routes";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapseID: ""
    };
  }

  toggleCollapse = collapseID => () =>
    this.setState(prevState => ({
      collapseID: prevState.collapseID !== collapseID ? collapseID : ""
    }));

  closeCollapse = collapseID => () =>
    this.state.collapseID === collapseID && this.setState({ collapseID: "" });

  render() {
    const overlay = (
      <div
        id="sidenav-overlay"
        style={{ backgroundColor: "transparent" }}
        onClick={this.toggleCollapse("mainNavbarCollapse")}
      />
    );
    return (
      <Router>
        <div className="flyout">
          <Navbar color="white" light expand="md" fixed="top" scrolling>
            <NavbarBrand href="/">
              <img
                src="/logo.png"
                alt="Hazardous Waste Management Program"
                height="50"
              />{" "}
              
            </NavbarBrand>
            <NavbarToggler
              onClick={this.toggleCollapse("mainNavbarCollapse")}
            />
            <Collapse
              id="mainNavbarCollapse"
              isOpen={this.state.collapseID}
              navbar
            >
              <NavbarNav right>
                <NavItem>
                  <NavLink
                    exact
                    to="/"
                    onClick={this.closeCollapse("mainNavbarCollapse")}
                  >
                    Home
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    onClick={this.closeCollapse("mainNavbarCollapse")}
                    to="/households"
                  >
                    Households
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    onClick={this.closeCollapse("mainNavbarCollapse")}
                    to="/businesses"
                  >
                    Businesses
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    onClick={this.closeCollapse("mainNavbarCollapse")}
                    to="/news-events"
                  >
                    News & Events
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    onClick={this.closeCollapse("mainNavbarCollapse")}
                    to="/language-resources"
                  >
                    Language Resources
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    onClick={this.closeCollapse("mainNavbarCollapse")}
                    to="/customer-service"
                  >
                    Customer Service
                  </NavLink>
                </NavItem>
                
              </NavbarNav>
            </Collapse>
          </Navbar>
          {this.state.collapseID && overlay}
          <main style={{ marginTop: "4rem" }}>
            <Routes />
          </main>

          <Footer color="black">
            <div className="container-fluid cyan lighten-4 ">
              <div className="row p-3">
                <small>
                  <div className="text-center col-sm-3 col-lg-offset-3 col-sm-offset-3">
                    <div className="row text-center">
                      <div className="col-xs-4 text-center">
                        <a href="#" className="text-dark"><i class="fa fa-3x fa-info-circle" aria-hidden="true"></i><br></br>
                        About us</a>
                      </div>
                      <div className="col-xs-4 text-center">
                        <a href="#" className="text-dark"><i class="fa fa-3x fa-check-circle-o" aria-hidden="true"></i><br></br>
                        Accountability</a>
                      </div>
                      <div className="col-xs-4 text-center">
                        <a href="#" className="text-dark"><i class="fa fa-3x fa-file-text-o" aria-hidden="true"></i><br></br>
                        Research</a>
                      </div>
                  </div>
                </div>
                  <div className="text-center col-sm-3">
                    <div class="row text-center">
                      <div className="col-xs-4 text-center">
                        <a href="#" className="text-dark"><i class="fa fa-3x fa-globe" aria-hidden="true"></i><br></br>
                        Policy & Advocacy</a>
                      </div>
                      <div className="col-xs-4 text-center">
                        <a href="#" className="text-dark"><i class="fa fa-3x fa-wrench" aria-hidden="true"></i><br></br>
                        Toolkit</a>
                      </div>
                      <div className="col-xs-4 text-center">
                        <a href="#" className="text-dark"><i class="fa fa-3x fa-briefcase" aria-hidden="true"></i><br></br>
                        Careers</a>
                      </div>
                    </div>
                  </div>
                </small>
              </div>
            </div>

            <div className="row m-3 text-white">
              <div className="col-md-3">
                <p>
                  <img src="/king-county.gif" className="img-fluid" alt="King County"></img>
                </p>
                <p className="footer-copyright ml-3 pt-3">
                  <a href="https://www.kingcounty.gov/about/website/termsofuse"> &copy; King County, WA {new Date().getFullYear()} {" "} </a>
                </p>
              </div>
              <div className="col-md-3">
                <p>As part of the<br></br>
                <strong>Local Hazardous Waste Management Program in King County</strong></p>
                <p>
                  <address>
                  130 Nickerson St.<br></br>
                  Suite 100<br></br>
                  Seattle WA 98101
                  </address>
                  </p>
              </div>
              <div className="col-md-3"> 
                <ul class="list-unstyled">
                  <li><a href="#" class="text-light">Contact us</a></li>
                  <li><a href="#" class="text-light">Site map</a></li>
                  <li><a href="#" class="text-light">Terms of service</a></li>
                  <li><a href="#" class="text-light">Member login</a></li>
                  <li><a href="#" class="text-light">Toolkit</a></li>
                </ul>
              </div>
              <div className="col-md-3">
                <p><strong><a href="#" class="text-light">Household Hazards Line</a></strong><br></br>
                206-296-4692</p>
                <p><strong><a href="#" class="text-light">Business Waste Line</a></strong><br></br>
                206-296-4692</p></div>
              </div>
          </Footer>
        </div>
      </Router>
    );
  }
}

export default App;
