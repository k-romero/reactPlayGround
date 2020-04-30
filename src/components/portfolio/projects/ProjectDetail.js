import React from "react";
import { Link } from "react-router-dom";

import Header from "../header/Header";

const projectDetails1 = {
  title: "title1",
  body: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
  Aenean euismod elementum nisi quis eleifend. 
  Diam volutpat commodo sed egestas egestas. Morbi blandit cursus risus at ultrices mi. 
  Ornare aenean euismod elementum nisi quis. Vestibulum morbi blandit cursus risus. 
  Sollicitudin aliquam ultrices sagittis orci a scelerisque. 
  Vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras tincidunt lobortis. 
  Eget felis eget nunc lobortis mattis aliquam faucibus purus. 
  Egestas dui id ornare arcu odio ut sem nulla. Consectetur purus ut faucibus pulvinar elementum integer enim neque. 
  Libero nunc consequat interdum varius sit. Sem integer vitae justo eget magna fermentum iaculis. 
  Facilisis sed odio morbi quis. Malesuada fames ac turpis egestas sed tempus urna et pharetra. 
  Blandit libero volutpat sed cras ornare arcu dui vivamus arcu.`,
  image: [
    "https://i.imgur.com/9Mfxvb3.png",
    "https://i.imgur.com/o4zlDd0.jpg",
    "https://i.imgur.com/WqQZGnl.png"
  ]
};

const projectDetails2 = {
  title: "title2",
  body: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
  Aenean euismod elementum nisi quis eleifend. 
  Diam volutpat commodo sed egestas egestas. Morbi blandit cursus risus at ultrices mi. 
  Ornare aenean euismod elementum nisi quis. Vestibulum morbi blandit cursus risus. 
  Sollicitudin aliquam ultrices sagittis orci a scelerisque. 
  Vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras tincidunt lobortis. 
  Eget felis eget nunc lobortis mattis aliquam faucibus purus. 
  Egestas dui id ornare arcu odio ut sem nulla. Consectetur purus ut faucibus pulvinar elementum integer enim neque. 
  Libero nunc consequat interdum varius sit. Sem integer vitae justo eget magna fermentum iaculis. 
  Facilisis sed odio morbi quis. Malesuada fames ac turpis egestas sed tempus urna et pharetra. 
  Blandit libero volutpat sed cras ornare arcu dui vivamus arcu.`,
  image: [
    "https://i.imgur.com/9Mfxvb3.png",
    "https://i.imgur.com/o4zlDd0.jpg",
    "https://i.imgur.com/WqQZGnl.png"
  ]
};

const projectDetails3 = {
  title: "title3",
  body: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
  Aenean euismod elementum nisi quis eleifend. 
  Diam volutpat commodo sed egestas egestas. Morbi blandit cursus risus at ultrices mi. 
  Ornare aenean euismod elementum nisi quis. Vestibulum morbi blandit cursus risus. 
  Sollicitudin aliquam ultrices sagittis orci a scelerisque. 
  Vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras tincidunt lobortis. 
  Eget felis eget nunc lobortis mattis aliquam faucibus purus. 
  Egestas dui id ornare arcu odio ut sem nulla. Consectetur purus ut faucibus pulvinar elementum integer enim neque. 
  Libero nunc consequat interdum varius sit. Sem integer vitae justo eget magna fermentum iaculis. 
  Facilisis sed odio morbi quis. Malesuada fames ac turpis egestas sed tempus urna et pharetra. 
  Blandit libero volutpat sed cras ornare arcu dui vivamus arcu.`,
  image: [
    "https://i.imgur.com/9Mfxvb3.png",
    "https://i.imgur.com/o4zlDd0.jpg",
    "https://i.imgur.com/WqQZGnl.png"
  ]
};

let projectDetails4 = {
  title: "title4",
  body: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
  Aenean euismod elementum nisi quis eleifend. 
  Diam volutpat commodo sed egestas egestas. Morbi blandit cursus risus at ultrices mi. 
  Ornare aenean euismod elementum nisi quis. Vestibulum morbi blandit cursus risus. 
  Sollicitudin aliquam ultrices sagittis orci a scelerisque. 
  Vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras tincidunt lobortis. 
  Eget felis eget nunc lobortis mattis aliquam faucibus purus. 
  Egestas dui id ornare arcu odio ut sem nulla. Consectetur purus ut faucibus pulvinar elementum integer enim neque. 
  Libero nunc consequat interdum varius sit. Sem integer vitae justo eget magna fermentum iaculis. 
  Facilisis sed odio morbi quis. Malesuada fames ac turpis egestas sed tempus urna et pharetra. 
  Blandit libero volutpat sed cras ornare arcu dui vivamus arcu.`,
  image: ["https://i.imgur.com/9Mfxvb3.png"]
};

let projectDetails5 = {
  title: "title5",
  body: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
  Aenean euismod elementum nisi quis eleifend. 
  Diam volutpat commodo sed egestas egestas. Morbi blandit cursus risus at ultrices mi. 
  Ornare aenean euismod elementum nisi quis. Vestibulum morbi blandit cursus risus. 
  Sollicitudin aliquam ultrices sagittis orci a scelerisque. 
  Vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras tincidunt lobortis. 
  Eget felis eget nunc lobortis mattis aliquam faucibus purus. 
  Egestas dui id ornare arcu odio ut sem nulla. Consectetur purus ut faucibus pulvinar elementum integer enim neque. 
  Libero nunc consequat interdum varius sit. Sem integer vitae justo eget magna fermentum iaculis. 
  Facilisis sed odio morbi quis. Malesuada fames ac turpis egestas sed tempus urna et pharetra. 
  Blandit libero volutpat sed cras ornare arcu dui vivamus arcu.`,
  image: [
    "https://i.imgur.com/9Mfxvb3.png",
    "https://i.imgur.com/o4zlDd0.jpg",
    "https://i.imgur.com/WqQZGnl.png"
  ]
};

let projDeets = {};

function ProjectDetail({ match }) {
  const id = Number(match.params.id);
  //using this in place of creating a backend soley for my info :/
  if (id === 1) {
    projDeets = projectDetails1;
    console.log(projDeets);
  } else if (id === 2) {
    projDeets = projectDetails2;
    console.log(projDeets);
  } else if (id === 3) {
    projDeets = projectDetails3;
    console.log(projDeets);
  } else if (id === 4) {
    projDeets = projectDetails4;
    console.log(projDeets);
  } else if (id === 5) {
    projDeets = projectDetails5;
    console.log(projDeets);
  }

  const images = projDeets.image.map((single, index) => (
    <img
      src={single}
      alt="project details"
      key={index}
      className="u-margin-bottom-small"
    ></img>
  ));

  return (
    <div className="">
      <Header />
      <div className="proj-details-container">
        <div className="proj-details-container-inner">
          <h1 className="heading-primary heading-primary--main">
            {projDeets.title}
          </h1>
          <p className="paragraph">{projDeets.body}</p>
        </div>
        <div className="proj-details-linkBack">
          <Link className="proj-details-linkBack-link" to="/projects">
            -Back To Projects-
          </Link>
        </div>
      </div>
      <div className="proj-details-images">{images}</div>
    </div>
  );
}

export default ProjectDetail;
