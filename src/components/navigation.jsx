import React, { Component } from "react";
import "../App.css"
export class Navigation extends Component {
  render() {
    return (
      <nav id="menu" className="navbar navbar-default navbar-fixed-top">
        <div className="container">
          <div className="navbar-header" style={{alignItems: 'center',display: 'flex', justifyContent: ""}}>
            <button
              type="button"
              className="navbar-toggle collapsed"
              data-toggle="collapse"
              data-target="#bs-example-navbar-collapse-1"
            >
              {" "}
              <span className="sr-only">Toggle navigation</span>{" "}
              <span className="icon-bar"></span>{" "}
              <span className="icon-bar"></span>{" "}
              <span className="icon-bar"></span>{" "}
            </button>
            <a href="#page-top">
              <img arlt="logo" src={"img/bitcode_logo.png"} style={{width: '20rem'}}/>
            </a>{" "}
          </div>

          <div
            className="collapse navbar-collapse"
            id="bs-example-navbar-collapse-1"
          >
            <ul className="nav navbar-nav navbar-right">
              <li>
                <a href="#features" className="page-scroll">
                  特點
                </a>
              </li>
              <li>
                <a href="#about" className="page-scroll">
                  關於
                </a>
              </li>
              <li>
                <a href="#services" className="page-scroll">
                  服務
                </a>
              </li>
              <li>
                <a href="#portfolio" className="page-scroll">
                案例
                </a>
              </li>
              {/* <li>
                <a href="#testimonials" className="page-scroll">
                  Testimonials
                </a>
              </li> */}
              <li>
                <a href="#team" className="page-scroll">
                團隊
                </a>
              </li>
              <li>
                <a href="#contact" className="page-scroll">
                聯繫
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navigation;
