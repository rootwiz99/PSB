import React from "react";
import "../css/project.css";
import ImageCardProject from "../components/ImageCardProject";
import { Row } from "antd";

const Projects = () => {
  return (
    <div
      style={{
        marginTop: "85px",
      }}
    >
      <h2 className="projectHeading">OUR PREVIOUS WORK</h2>
      <div className="projectImage">
        <Row>
          <ImageCardProject
            imageUrl="https://i.ibb.co/pdyYYrp/JAOH2340.jpg"
            imgtxt="Laziz Foods - Breeze Block Planted By PSB"
          />
          <ImageCardProject
            imageUrl="https://i.ibb.co/x7Wpryh/IMG-E0067.jpg"
            imgtxt=" Breeze Block Planted By PSB"
          />
          <ImageCardProject
            imageUrl="https://i.ibb.co/x6dkwG1/IMG-0020.jpg"
            imgtxt="Breeze Block Planted By PSB "
          />
          <ImageCardProject
            imageUrl="https://i.ibb.co/x7Wpryh/IMG-E0067.jpg"
            imgtxt="Breeze Block Planted By PSB "
          />
          <ImageCardProject
            imageUrl="https://i.ibb.co/pRywDd9/IMG-0362.jpg"
            imgtxt="Breeze Block Planted By PSB "
          />
          <ImageCardProject
            imageUrl="https://i.ibb.co/S0bFCh0/IMG-E0768.jpg"
            imgtxt="Breeze Block Planted By PSB "
          />
        </Row>
      </div>
    </div>
  );
};

export default Projects;
