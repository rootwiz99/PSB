import React from "react";
import "../css/imageCardProject.css";
import { Col } from "antd";
import { Card } from "antd";
const { Meta } = Card;

const ImageCardProject = (props) => {
  return (
    <Col xs={24} md={24} lg={12}>
      <Card
        className="projectCard"
        cover={
          <img
            className="proImg"
            style={{
              borderRadius: "20px",

              width: "100%",
             
              height: "20rem",

              objectFit: "cover",
            }}
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
