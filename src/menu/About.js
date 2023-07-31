import React, { useState, useEffect } from "react";
import "../css/about.css";
import { Card } from "antd";
const { Meta } = Card;
const About = () => {
  const [scrollY, setScrollY] = useState(0);

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      style={{
        marginTop: "75px",
      }}
    >
      <h2 className="heading">ABOUT PSB INDUSTRIES</h2>
      <h3 className="aboutContent">
        Contrary to popular belief, Lorem Ipsum is not simply random text. It
        has roots in a piece of classical Latin literature from 45 BC, making it
        over 2000 years old. Richard McClintock, a Latin professor at
        Hampden-Sydney College in Virginia, looked up one of the more obscure
        Latin words, consectetur, from a Lorem Ipsum passage, and going through
        the cites of the word in classical literature, discovered the
        undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33
        of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by
        Cicero, written in 45 BC. This book is a treatise on the theory of
        ethics, very popular during the Renaissance. The first line of Lorem
        Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section
        1.10.32. The standard chunk of Lorem Ipsum used since the 1500s is
        reproduced below for those interested. Sections 1.10.32 and 1.10.33 from
        "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their
        exact original form, accompanied by English versions from the 1914
        translation by H. Rackham.
      </h3>
      <h2 className="ourFounders">Our Founders</h2>
      <div className="founders">
        <Card
          style={{ opacity: 0 + scrollY * 0.003 }}
          className="founder-1"
          cover={
            <img
              style={{
                width: 150,
                height: 200,
                marginLeft: 5,
                marginRight: 5,
                objectFit: "cover",
              }}
              alt="example"
              src="https://images.unsplash.com/photo-1519058082700-08a0b56da9b4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80"
            />
          }
        >
          <Meta title="PALASH SAWARKAR" description="CO-FOUNDER" />
        </Card>
        <Card
          style={{ opacity: 0 + scrollY * 0.003 }}
          className="founder-2"
          cover={
            <img
              style={{
                width: 150,
                height: 200,
                marginLeft: 5,
                marginRight: 5,
                objectFit: "cover",
              }}
              alt="example"
              src="https://static.india.com/wp-content/uploads/2017/01/badrinath-Ki-dulhania.jpg"
            />
          }
        >
          <Meta title="SHUBHAM BAGDE" description="CO-FOUNDER" />
        </Card>
      </div>
    </div>
  );
};

export default About;
