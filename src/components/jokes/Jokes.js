import React, { useState, useEffect } from "react";

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
    <div className="text-center">
      <h1>Jokes</h1>
      {jokes.map(joke => (
        <div className="jokes" key={joke.id}>
          <p className="jokes-setup">{joke.setup}</p>
          <p className="jokes-punchline">{joke.punchline}</p>
        </div>
      ))}
    </div>
  );
}

export default Jokes;
