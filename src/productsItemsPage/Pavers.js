import React from "react";
import "../css/pavers.css";
import ImageCardTypes from "./../components/ImageCardTypes";
import { Row } from "antd";
const pavers = () => {
  return (
    <div style={{ marginTop: "75px" }}>
      <h2 className="heading">PAVERS AVAILABLE</h2>

      <Row>
        <div className="paversCard">
          <ImageCardTypes
            url="https://www.viettiles.com/upload/ckfinder/images/g%E1%BA%A1ch-b%C3%B4ng-c%E1%BB%95-%C4%91i%E1%BB%83n-cho-trang-tri-n%E1%BB%99i-th%E1%BA%A5t-sang-tr%E1%BB%8Dng-encaustic-cement-tile.jpg"
            title="categori"
            description="flkenn"
            nextImages={[
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaq0VOSNb03opKkTyxL9GGnnWEDQEaQ8ZLRw&usqp=CAU",
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTW_OEDwm50VcuTDJDBAFKxW-A0x2Hu62ujcHIllx4KVPdvbAtYcU_bSSiXCab8vjz_Nec",
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVYLcUl2r1csr-rXHCVh2ZpqdfaYPcW2sBew1t6_8Q0YS1P-_dCuAx9MABVx7crp2A18Y",
            ]}
          />
          <ImageCardTypes
            url="https://www.viettiles.com/upload/ckfinder/images/g%E1%BA%A1ch-b%C3%B4ng-c%E1%BB%95-%C4%91i%E1%BB%83n-cho-trang-tri-n%E1%BB%99i-th%E1%BA%A5t-sang-tr%E1%BB%8Dng-encaustic-cement-tile.jpg"
            title="categori"
            description="flkenn"
          />
          <ImageCardTypes
            url="https://www.viettiles.com/upload/ckfinder/images/g%E1%BA%A1ch-b%C3%B4ng-c%E1%BB%95-%C4%91i%E1%BB%83n-cho-trang-tri-n%E1%BB%99i-th%E1%BA%A5t-sang-tr%E1%BB%8Dng-encaustic-cement-tile.jpg"
            title="categori"
            description="flkenn"
          />
          <ImageCardTypes
            url="https://www.viettiles.com/upload/ckfinder/images/g%E1%BA%A1ch-b%C3%B4ng-c%E1%BB%95-%C4%91i%E1%BB%83n-cho-trang-tri-n%E1%BB%99i-th%E1%BA%A5t-sang-tr%E1%BB%8Dng-encaustic-cement-tile.jpg"
            title="categori"
            description="flkenn"
          />
          <ImageCardTypes
            url="https://www.viettiles.com/upload/ckfinder/images/g%E1%BA%A1ch-b%C3%B4ng-c%E1%BB%95-%C4%91i%E1%BB%83n-cho-trang-tri-n%E1%BB%99i-th%E1%BA%A5t-sang-tr%E1%BB%8Dng-encaustic-cement-tile.jpg"
            title="categori"
            description="flkenn"
          />
          <ImageCardTypes
            url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWMGLtsbZ6oAJ_wLN6TwAU3YjMfTsBZEBu8Q"
            title="categori"
            description="flkenn"
          />
        </div>
      </Row>
    </div>
  );
};

export default pavers;
