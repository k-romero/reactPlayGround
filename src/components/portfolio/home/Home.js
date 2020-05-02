import React from "react";
import Header from "../header/Header";
import InfoCard from "./InfoCard";
import FeatureBoxes from "./FeatureBoxes";

function Home(props) {
  const cardHeading = "Kevin A. Romero";
  const cardSubTitle = "Developer / Designer";
  const cardBody = ` My story begins with a box and some paper. The paper was an old
  composition notebook whose pages were already discolored from age
  and the box contained a random assortment of whatever pens,
  pencils, highlighters and markers my grandmother collected over
  the years. With those tools I began my creative journey and
  developed a deep love of art & design. Lately I've been diving
  into all things development. My core focus these days is becoming
  a polygot developer. Visit my `;
  const linkTitle = "Github ";
  const link = "https://github.com/k-romero";
  const cardBodyEnd = "to view my latest work.";

  return (
    <div className="">
      <Header />
      <InfoCard
        cardHeading={cardHeading}
        cardTitle={cardSubTitle}
        cardBody={cardBody}
        linkTitle={linkTitle}
        link={link}
        cardBodyEnd={cardBodyEnd}
      />
      <FeatureBoxes />
    </div>
  );
}

export default Home;
