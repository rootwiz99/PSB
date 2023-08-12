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
        style={{
          padding: "20px",
          width: "100%",
        }}
        cover={
          <img
            className="proImg"
            style={{
              borderRadius: "20px",
              height: "100%",
              width: "100%",
              objectFit: "cover",
            }}
            src={props.imageUrl}
            alt="err"
          />
        }
      >
        <h3 className="projecttxt">{props.imgtxt}</h3>
        
      </Card>
    </Col>
  );
};

export default ImageCardProject;
