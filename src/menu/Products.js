import "../css/products.css";
import React from "react";
import ImageCard from "../components/ImageCard";
import { useNavigate } from "react-router-dom";
import { Row } from "antd";

const Products = () => {
  const navigate = useNavigate();
  const handleClickPavers = () => {
    navigate("/Pavers");
  };
  return (
    <div
      style={{
        marginTop: "75px",
      }}
    >
      <h2 className="heading">PRODUCTS WE MANUFACTURE</h2>
      <h3 className="subHeading">TAP TO KNOW MORE</h3>

      <div className="productCards">
        <Row>
          <ImageCard
            url="https://jubincantik.com/wp-content/uploads/2022/11/Breeze-Block-Della-2-1.jpg"
            title="PAverrrs"
            description="this is awesome"
            onClick={handleClickPavers}
          />
          <ImageCard
            url="https://jubincantik.com/wp-content/uploads/2022/11/Breeze-Block-Della-2-1.jpg"
            title="BREEZE BLOCKS"
            description="this is awesome"
          />
          <ImageCard
            url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWMGLtsbZ6oAJ_wLN6TwAU3YjMfTsBZEBu8Q"
            title="TABLE TOP"
            description="this is awesome"
          />
          <ImageCard
            url="https://www.viettiles.com/upload/ckfinder/images/g%E1%BA%A1ch-b%C3%B4ng-c%E1%BB%95-%C4%91i%E1%BB%83n-cho-trang-tri-n%E1%BB%99i-th%E1%BA%A5t-sang-tr%E1%BB%8Dng-encaustic-cement-tile.jpg"
            title="CEMENT TILES"
            description="this is awesome"
          />
          <ImageCard
            url="https://i.pinimg.com/236x/1b/45/7c/1b457cd070f1a1b1e7f946e7f6e8444c--concrete-design-concrete-tiles.jpg"
            title="WALL TILES"
            description="this is awesome"
          />
          <ImageCard
            url="data:image/jpeg;base64,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"
            title="gATTU"
            description="this is awesome"
          />
          <ImageCard
            url="https://www.viettiles.com/upload/ckfinder/images/g%E1%BA%A1ch-b%C3%B4ng-c%E1%BB%95-%C4%91i%E1%BB%83n-cho-trang-tri-n%E1%BB%99i-th%E1%BA%A5t-sang-tr%E1%BB%8Dng-encaustic-cement-tile.jpg"
            title="CEMENT TILES"
            description="this is awesome"
          />
          <ImageCard
            url="https://www.viettiles.com/upload/ckfinder/images/g%E1%BA%A1ch-b%C3%B4ng-c%E1%BB%95-%C4%91i%E1%BB%83n-cho-trang-tri-n%E1%BB%99i-th%E1%BA%A5t-sang-tr%E1%BB%8Dng-encaustic-cement-tile.jpg"
            title="CEMENT TILES"
            description="this is awesome"
          />
          <ImageCard
            url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWMGLtsbZ6oAJ_wLN6TwAU3YjMfTsBZEBu8Q"
            title="TABLE TOP"
            description="this is awesome"
          />
          <ImageCard
            url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWMGLtsbZ6oAJ_wLN6TwAU3YjMfTsBZEBu8Q"
            title="TABLE TOP"
            description="this is awesome"
          />
          <ImageCard
            url="https://jubincantik.com/wp-content/uploads/2022/11/Breeze-Block-Della-2-1.jpg"
            title="BREEZE BLOCKS"
            description="this is awesome"
          />
          <ImageCard
            url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWMGLtsbZ6oAJ_wLN6TwAU3YjMfTsBZEBu8Q"
            title="TABLE TOP"
            description="this is awesome"
          />
        </Row>
      </div>
    </div>
  );
};

export default Products;
