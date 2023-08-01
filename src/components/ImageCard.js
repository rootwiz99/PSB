import React from "react";
import { Col } from "antd";
import { Card } from "antd";
import "../css/imageCard.css";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
const { Meta } = Card;

const ImageCard = (props) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  return (
    <Col xs={12} md={6} lg={4}>
      <motion.div
        ref={ref}
        initial={{ opacity: 1, y: 100, x: 0 }}
        animate={{
          opacity: inView ? 1 : 1,
          y: inView ? 0 : 100,
        }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
      >
        <Card
          className="productCard"
          cover={<img alt="example" src={props.url} />}
          onClick={props.onClick}
        >
          <Meta
            className="productText"
            title={props.title}
            description={props.description}
          />
        </Card>
      </motion.div>
    </Col>
  );
};

export default ImageCard;
