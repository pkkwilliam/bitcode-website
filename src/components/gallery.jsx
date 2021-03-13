import React, { Component } from "react";
import PickTB from "./picktb";
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
          </div>
        </div>
      </div>
    );
  }
}

export default Gallery;
