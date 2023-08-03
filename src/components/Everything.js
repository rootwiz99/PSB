import React from "react";
import Home from "../menu/Home";
import About from "../menu/About";
import Projects from "../menu/Projects";
import Products from "../menu/Products";

const Everything = () => {
  return (
    <div>
      <section id="Home">
        <Home />
      </section>

      <section id="Projects">
        <Projects />
      </section>

      <section id="Products">
        <Products />
      </section>

      <section id="About">
        <About />
      </section>
    </div>
  );
};

export default Everything;
