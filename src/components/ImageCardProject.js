import React from "react";
import "../css/imageCardProject.css";
import { Image, Col } from "antd";
import { Card } from "antd";
const { Meta } = Card;

const ImageCardProject = (props) => {
  return (
    <Col xs={24} md={24} lg={12}>
      <Card
      
        className="productCard"
        cover={
          <Image
            className="proImg"
            style={{ height: "100%", padding: "30px" ,borderRadius:"50px" }}
            src={props.imageUrl}
            alt="err"
          />
        }
      >
        <Meta className="productText" title="ji dnds sicnv" />
      </Card>
    </Col>
  );
};

export default ImageCardProject;
