import React from "react";
import "./work.css";
import Works from "./Works";

const Work = () => {
  return (
    <section class="work section" id="portfolio">
      <h2 class="section__title">Portfolio</h2>
      <span class="section__subtitle">Some of My Recent Work<br />(most client websites are on private repos)</span>

      <Works />
    </section>
  );
};

export default Work;
