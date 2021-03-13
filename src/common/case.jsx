import React from "react";
import P from "./paragraph";
import View from "./view";

export function App(props) {
  const { androidAPKContentUrl, iosContentUrl } = props;
  return (
    <View style={{ justifyContent: "space-around", marginTop: 20 }}>
      <AppDownloadButton
        contentUrl={iosContentUrl}
        imageUrl="img/apple_store.png"
      />
      <AppDownloadButton
        contentUrl={androidAPKContentUrl}
        imageUrl="img/install_from_apk.png"
        style={{ marginBottom: 20, marginLeft: 20 }}
      />
    </View>
  );
}

function AppDownloadButton({ imageUrl, contentUrl, style }) {
  return (
    <a href={contentUrl}>
      <img src={imageUrl} style={{ height: "4rem", ...style }} />
    </a>
  );
}

export function Case(props) {
  const { children, detail, domain, isApp, name } = props;
  return (
    <div className="container">
      <div className="row">
        <div className="col-xs-12 col-md-8">
          <View style={{ alignItems: "flex-start", flexDirection: "column" }}>
            <View style={{ alignItems: "flex-end" }}>
              <h3>{name}</h3>
              <a href={domain} target="_blank">
                <p style={{ marginLeft: 10 }}>{domain}</p>
              </a>
            </View>
            <P
              style={{
                fontSize: 18,
                textAlign: "start",
                whiteSpace: "pre-wrap",
              }}
            >
              {detail}
            </P>
            {isApp ? <App {...props} /> : null}
          </View>
        </div>
        <div className="col-xs-12 col-md-4">{children}</div>
      </div>
    </div>
  );
}

export function Image({ url, style }) {
  return (
    <div>
      <div className="portfolio-item">
        <div className="hover-bg">
          <a
            title="picktb_system_image"
            data-lightbox-gallery="gallery1"
            onClick={() => window.open(url)}
          >
            <div className="hover-text">
              <h4>打開</h4>
            </div>
            <img
              src={url}
              className="img-responsive"
              alt="Project Title"
              style={{ borderRadius: 10, ...style }}
            />
          </a>
        </div>
      </div>
    </div>
  );
}
