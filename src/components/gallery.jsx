import React, { Component } from "react";

export class Gallery extends Component {
  state = {
    jsonContent: {},
  };

  componentDidMount() {
    fetch(
      "https://raw.githubusercontent.com/pkkwilliam/github.io-contents/master/bitcode_website/gallary/gallary.json "
    );
  }

  render() {
    return (
      <div id="portfolio" className="text-center">
        <div className="container">
          <div className="section-title">
            <h2>最近案例</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed
              dapibus leonec.
            </p>
          </div>
          <div className="row">
            <div className="portfolio-items">
              <PickTbSection />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function PickTbSection() {
  return (
    <div>
      <p>
        澳提代收管理系統是為澳門龐志空運速递有限公司專門開發的淘寶代收平可快速幫助物流公司建立多功能及健全的快递業務，其中包括手機應
        用，物流管理，貨物追蹤，難件處理，打印運單...
        此系統旨在為物流公司及普通商戶創立完善的共赢平台，互惠互利，通過社會化平台分享閒置實物資源或認知盈餘，以低於專業性組織者的邊際成本提供服務並獲得收入的經濟現象。
      </p>
      <p>運動系統:</p>
      <ul>
        <li>iOS</li>
        <li>Android</li>
        <li>Mac</li>
        <li>Windows</li>
      </ul>
      <div className="col-sm-6 col-md-4 col-lg-4">
        <div className="portfolio-item">
          <div className="hover-bg">
            <a
              href="img/portfolio/01-large.jpg"
              title="Project Title"
              data-lightbox-gallery="gallery1"
            >
              <div className="hover-text">
                <h4>Lorem Ipsum</h4>
              </div>
              <img
                src="img/portfolio/01-small.jpg"
                className="img-responsive"
                alt="Project Title"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Gallery;
