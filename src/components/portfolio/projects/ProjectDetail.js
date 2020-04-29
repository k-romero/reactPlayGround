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
  image: "https://i.imgur.com/9Mfxvb3.png"
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
  image: "https://i.imgur.com/9Mfxvb3.png"
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
  image: "https://i.imgur.com/9Mfxvb3.png"
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
  image: "https://i.imgur.com/9Mfxvb3.png"
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
  image: "https://i.imgur.com/9Mfxvb3.png"
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

  return (
    <div className="">
      <Header />
      <div className="proj-details-container u-margin-bottom-big">
        <div className="proj-details-container-inner">
          <h1 className="heading-primary heading-primary--main">
            {projDeets.title}
          </h1>
          <p className="paragraph">{projDeets.body}</p>
          <img src={projDeets.image} alt="project details"></img>
        </div>
        <div className="proj-details-linkBack">
          <Link className="proj-details-linkBack-link" to="/projects">
            -Back To Projects-
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProjectDetail;
