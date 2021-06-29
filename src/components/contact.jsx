import React, { Component } from "react";

export class Contact extends Component {
  render() {
    return (
      <div>
        <div id="contact">
          <div className="container">
            <div className="col-md-8">
              <div className="row">
                <div className="section-title">
                  <h2>聯絡我們</h2>
                  {/* <p>
                    Please fill out the form below to send us an email and we
                    will get back to you as soon as possible.
                  </p> */}
                </div>
                {/* <form action="https://mailthis.to/pkkwilliam919@gmail.com" 
    method="POST"> 
    <input type="text" name="name" placeholder="Your name" /> 
    <input type="email" name="_replyto" placeholder="Your email" /> 
    <input type="submit" value="Send" /> 
</form>  */}
                <form
                  action="https://mailthis.to/pkkwilliam919@gmail.com"
                  method="POST"
                >
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          type="text"
                          id="name"
                          className="form-control"
                          name="name"
                          placeholder="姓名"
                          required="required"
                          style={{ borderRadius: 5 }}
                        />
                        <p className="help-block text-danger"></p>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          type="email"
                          id="email"
                          className="form-control"
                          name="_replyto"
                          placeholder="郵箱地址"
                          required="required"
                          style={{ borderRadius: 5 }}
                        />
                        <p className="help-block text-danger"></p>
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <textarea
                      name="message"
                      id="message"
                      className="form-control"
                      rows="4"
                      placeholder="信息"
                      required
                      style={{ borderRadius: 10 }}
                    />
                    <p className="help-block text-danger"></p>
                  </div>
                  <div id="success"></div>
                  <button
                    type="submit"
                    className="btn btn-custom btn-lg"
                    style={{ width: "100%", borderRadius: 10 }}
                  >
                    發送
                  </button>
                </form>
              </div>
            </div>
            <div className="col-md-3 col-md-offset-1 contact-info">
              <div className="contact-item">
                <h3>聯絡資訊</h3>
                <p>
                  <span>
                    <i className="fa fa-map-marker"></i>地址
                  </span>
                  {this.props.data ? this.props.data.address : "loading"}
                </p>
              </div>
              <div className="contact-item">
                <p>
                  <span>
                    <i className="fa fa-phone"></i>電話
                  </span>
                  {this.props.data ? this.props.data.phone : "loading"}
                </p>
              </div>
              <div className="contact-item">
                <p>
                  <span>
                    <i className="fa fa-globe"></i>網址
                  </span>
                  {this.props.data ? this.props.data.website : "loading"}
                </p>
              </div>
              <div className="contact-item">
                <p>
                  <span>
                    <i className="fa fa-envelope-o"></i>Email
                  </span>
                  {this.props.data ? this.props.data.email : "loading"}
                </p>
              </div>
            </div>
            {/* <SocialMedia {...this.props}/> */}
          </div>
        </div>
        <div id="footer">
          <div className="container text-center">
            <p>&copy; 2021 Bitcode Technology Co. Ltd.</p>
          </div>
        </div>
      </div>
    );
  }
}

function SocialMedia(props) {
  return (
    <div className="col-md-12">
      <div className="row">
        <div className="social">
          <ul>
            <li>
              <a href={props.data ? props.data.facebook : "/"}>
                <i className="fa fa-facebook"></i>
              </a>
            </li>
            <li>
              <a href={props.data ? props.data.twitter : "/"}>
                <i className="fa fa-twitter"></i>
              </a>
            </li>
            <li>
              <a href={props.data ? props.data.youtube : "/"}>
                <i className="fa fa-youtube"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Contact;
