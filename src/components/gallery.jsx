import React, { Component } from "react";
import PickTB from "./picktb";
import Rmms from "./rmms";
export class Gallery extends Component {
  render() {
    return (
      <div id="portfolio" className="text-center">
        <div className="container">
          <div className="section-title">
            <h2>最近案例</h2>
          </div>
          <div className="row">
            <div className="portfolio-items">
              <PickTB />
            </div>
            <div className="portfolio-items">
              <Rmms />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Gallery;
