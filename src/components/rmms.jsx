import React from "react";
import { Case, Image } from "../common/case";
import P from "../common/paragraph";
import View from "../common/view";

const RMMS_CONTENT = {
  name: "地產業務推廣系統",
  detail:
    "源代碼專為地產業務開發的推廣系統，高度定制化切合企業的設計風格，微信高效率傳播，避免朋友圈拉黑及輕鬆屏示多個樓盤。",
  imagePath: "img/rmms_re",
  images: ["/rmms_re_1.png", "/rmms_re_2.png"],
  isApp: false,
};

export default function Rmms(props) {
  const { detail, imagePath, images, name } = RMMS_CONTENT;
  const ClientImages = images.map((image) => (
    <div className="col-xs-12 col-md-4">
      <Image url={imagePath + image} />
    </div>
  ));
  return (
    <div className="container">
      <View style={{ alignItems: "flex-start", flexDirection: "column" }}>
        <View style={{ alignItems: "flex-end" }}>
          <h3>{name}</h3>
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
      </View>
      <div className="row">{ClientImages}</div>
    </div>
  );
}
