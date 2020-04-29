import React, { useState, useEffect } from "react";

import Header from "../portfolio/header/Header";
import InfoCard from "../portfolio/home/InfoCard";

function Jokes() {
  useEffect(() => {
    fetchJokes();
  }, []);

  const [jokes, setJokes] = useState([]);

  const fetchJokes = async () => {
    const data = await fetch(
      "https://official-joke-api.appspot.com/jokes/programming/ten"
    );
    const jsonJokes = await data.json();
    console.log(jsonJokes);
    setJokes(jsonJokes);
  };

  return (
    <div>
      <Header />
      <div className="text-center">
        <h1>Jokes</h1>
        {jokes.map(joke => (
          <div className="jokes" key={joke.id}>
            <InfoCard cardTitle={joke.setup} cardBody={joke.punchline} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Jokes;
