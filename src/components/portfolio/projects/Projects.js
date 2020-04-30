import React from "react";
import Header from "../header/Header";
import ProjCard from "./ProjCard";

const card1 = (
  <ProjCard
    heading="Proj1"
    subHeading="This is my proj1"
    image="https://i.imgur.com/9Mfxvb3.png"
    linkTitle="View More"
    link="1"
    body="This was a project that I did about something and something else and it was a good time and yea this is cool."
  />
);

const card2 = (
  <ProjCard
    heading="Proj2"
    subHeading="This is my proj2"
    image="https://i.imgur.com/9Mfxvb3.png"
    linkTitle="View More"
    link="2"
    body="This was a project that I did about something and something else and it was a good time and yea this is cool."
  />
);

const card3 = (
  <ProjCard
    heading="Proj3"
    subHeading="This is my proj3"
    image="https://i.imgur.com/9Mfxvb3.png"
    linkTitle="View More"
    link="3"
    body="This was a project that I did about something and something else and it was a good time and yea this is cool."
  />
);

const card4 = (
  <ProjCard
    heading="Proj4"
    subHeading="This is my proj4"
    image="https://i.imgur.com/9Mfxvb3.png"
    linkTitle="View More"
    link="4"
    body="This was a project that I did about something and something else and it was a good time and yea this is cool."
  />
);

const card5 = (
  <ProjCard
    heading="Proj5"
    subHeading="This is my proj5"
    image="https://i.imgur.com/9Mfxvb3.png"
    linkTitle="View More"
    link="5"
    body="This was a project that I did about something and something else and it was a good time and yea this is cool."
  />
);

const cards = [card1, card2, card3, card4, card5];

const cardList = cards.map((card, index) => (
  <div className="proj-single" key={index}>
    {card}
  </div>
));

function Projects(props) {
  return (
    <div className="proj">
      <Header />
      <div className="proj-container">{cardList}</div>
    </div>
  );
}

export default Projects;
