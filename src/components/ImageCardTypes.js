import React from "react";
import { motion } from "framer-motion";
import { Card, Col } from "antd";
import { Image } from "antd";
import { useInView } from "react-intersection-observer";
const { Meta } = Card;

const ImageCardTypes = (props) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  return (
    <Col xs={12} md={6} lg={4}>
      <motion.div
        ref={ref}
        initial={{ opacity: 1, x: -100 }}
        animate={{
          opacity: inView ? 1 : 1,
          x: inView ? 0 : -100,
        }}
        transition={{ duration: 0.3 }}
      >
        <Card
          className="productCard"
          cover={
            <Image.PreviewGroup items={props.nextImages}>
              <Image src={props.url} />
            </Image.PreviewGroup>
          }
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

export default ImageCardTypes;
