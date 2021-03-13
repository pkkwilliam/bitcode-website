import React from "react";
import { Case, Image } from "../common/case";

const PICKTB_CONTENT = {
  name: "澳提 | PickTB",
  detail:
    "澳提代收管理系統是為澳門龐志空運速递有限公司專門開發的淘寶代收平可快速幫助物流公司建立多功能及健全的快递業務，其中包括手機應用，物流管理，貨物追蹤，難件處理，打印運單等等功能。",
  images: {
    adminImages: ["/picktb_admin_1.png"],
    clientImages: [
      "/picktb_app_advertisement_1.jpeg",
      // "/picktb_client_1.png",
      // "/picktb_client_2.png",
      // "/picktb_client_3.png",
      // "/picktb_client_4.png",
    ],
    imagePath: "img/picktb",
    shopImages: ["/picktb_shop_1.png"],
  },
  domain: "https://picktb.com",
  isApp: true,
  iosContentUrl:
    "https://apps.apple.com/us/app/%E6%BE%B3%E6%8F%90%E4%BB%A3%E6%94%B6/id1556460642#?platform=iphone",
  androidAPKContentUrl:
    "https://raw.githubusercontent.com/pkkwilliam/github.io-contents/master/oscm/assert/install_app/picktb.apk",
};

export default function PickTB() {
  const { name, detail, images, domain } = PICKTB_CONTENT;
  const { imagePath, clientImages } = images;
  const ClientImages = clientImages.map((image) => (
    <Image url={imagePath + image} />
  ));
  return <Case {...PICKTB_CONTENT}>{ClientImages}</Case>;
}
