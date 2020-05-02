This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## This is going to be my sandbox for learning React!

I will be updating this project frequently with a lot of beginner React code.

## Why React?

- I like the idea of using React because it is a library and not a framework.
- Want to work with a virtual browser
- React is just Javascript
- React is battle tested!
- React is declarative for dynamic data

## React Basic Concepts

#### Components

- like functions
- Input: props, state | Output: UI
- Reusable and composable
- Can manage a private state

#### Reactive Updates

- React will react
- Take updates to the browser

#### Virtual views in memory

- Generate HTML using JS
- No HTML template language

#### React Components

- Function Components
- Class Components

## JSX is NOT HTML!!!

```javascript
function Hello() {
	return <div>Hello React!</div>;
}

ReactDOM, render(
    <Hello />,
    document.getElementById('mountNode),
);
```

The above code will not throw a syntaxt error because the `return` line is _not_ HTML it is JSX
In this case we would be using Babel to compile the above code and Babel will take care of the rest.

## Component names need to start with an Uppercase first letter!

### Function reference

```javascript
function logRandom() {
  console.log(Math.random());
}

function Button() {
  const [counter, setCounter] = useState(0);
  return <button onClick={logRandom}>{counter}</button>;
}
```

We can take the above code and also inline the function and use arrow function like the below code

```javascript
function Button() {
  const [counter, setCounter] = useState(0);
  return <button onClick={() => console.log(Math.random())}>{counter}</button>;
}
```

Below is a simple example using state and state manipulation

```javascript
function Button() {
  const [counter, setCounter] = useState(5);
  const handleClick = () => setCounter(counter * 2);
  return <button onClick={handleClick}>{counter}</button>;
}

ReactDOM.render(<Button />, document.getElementById("mountNode"));
```

Below is an example of passing data and function from parent to children and an example of _Responsibility Isolation_

```javascript
function Button(props) {
  return <button onClick={props.onClickFunc}>*2</button>;
}

function Display(props) {
  return <div>{props.message}</div>;
}

function App() {
  const [counter, setCounter] = useState(5);
  const incrementCounter = () => setCounter(counter * 2);
  return (
    <div>
      <Button onClickFunc={incrementCounter} />
      <Display message={counter} />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("mountNode"));
```

And finally our completed example which allows us to pass in different values to our onClick function

```javascript
function Button(props) {
  const handleClick = () => props.onClickFunc(props.increment);
  return <button onClick={handleClick}>+{props.increment}</button>;
}

function Display(props) {
  return <div>{props.message}</div>;
}

function App() {
  const [counter, setCounter] = useState(0);
  const incrementCounter = incrementValue =>
    setCounter(counter + incrementValue);
  return (
    <div>
      <Button onClickFunc={incrementCounter} increment={1} />
      <Button onClickFunc={incrementCounter} increment={5} />
      <Button onClickFunc={incrementCounter} increment={10} />
      <Button onClickFunc={incrementCounter} increment={100} />
      <Display message={counter} />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("mountNode"));
```

### Benefit of using React to create HTML elements

In the code below, both the `render() & ReactDOM.render()` do the exact same thing except `React.DOM.render()` is smart enough to only update the `time` where as the `render()` updates the entire div.

```javascript
const render = () => {
  document.getElementById("mountNode").innerHTML = `
<div>
  Hello HTML
  <input />
<pre>
  ${new Date().toLocaleTimeString()}
</pre>

</div>
`;

  ReactDOM.render(
    React.createElement(
      "div",
      null,
      "Hello React",
      React.createElement("input", null),
      React.createElement("pre", null, new Date().toLocaleTimeString())
    ),
    document.getElementById("mountNode2")
  );
};

setInterval(render, 1000);
```

---

## EcmaScript Review

- Block scope is the same as Java -> { }
- Use _let_ and _const_ instead over _var_

#### Arrow Functions

all three of the below examples are valid

```javascript
const square1 = a => {
  return a * a;
};

const square2 = a => a * a;

const square3 = a => a8a;
```

#### Object Literals

made up of key value pairs

```javascript
const obj = {
  p1: 10,
  p2: 20,
  f1() {},
  f2: () => {}
};
```

#### Destructuring and Rest/Spread

```javascript
const PI = Math.PI;
const E = Math.E;
const SQRT2 = Math.SQRT2;
```

The code above can be destructured to the single line below

```javascript
const { PI, E, SQRT2 } = Math;
```

Additionally we can destructure objects to grab the property we need (see below)

```javascript
const circle = {
  label: "circleX",
  radius: 2
};

const circleArea = ({ radius }, { precision = 2 }) =>
  (PI * radius * radius).toFixed(precision);
console.log(circleArea(circle));
```

#### Template Strings

The code below uses template strings which allows us to use the \$sign syntax and reference outside variables, in addition we can have multi line strings.

```javascript
const html = `
<div>
${Math.random()}
</div>
`;
```

#### Classes

JS classes are a lot like Java classes. We can use inheritance, constructors, local variables and local functions.

#### Async/Promises

Both of the below examples use promises and do the same thing.

```javascript
const fetchData = () => {
  fetch("https://api.github.com").then(resp => {
    resp.json().then(data => {
      console.log(data);
    });
  });
};

const fetchData = async () => {
  const resp = await fetch("https://api.github.com");

  const data = await resp.json();

  console.log(data);
};
```

#### Styling using JS syntax

We can achieve this by using object literals. Take note of the double curly braces and the camel casing! (I don't like this :/)

```javascript
class Card extends React.Component {
  render() {
    return (
      <div className="github-profile" style={{ margin: "1rem" }}>
        <img src="https://placehold.it/75" />
        <div
          className="info"
          style={{ display: "inline-block", marginLeft: 10 }}
        >
          <div className="name" style={{ fontSize: "125%" }}>
            Name here...
          </div>
          <div className="company">Company here...</div>
        </div>
      </div>
    );
  }
}
```

#### Populating objects with data using props

Below is an example of taking data, a class, and a function component to make a series of cards

```javascript
const testData = [
  {
    name: "Dan Abramov",
    avatar_url: "https://avatars0.githubusercontent.com/u/810438?v=4",
    company: "@facebook"
  },
  {
    name: "Sophie Alpert",
    avatar_url: "https://avatars2.githubusercontent.com/u/6820?v=4",
    company: "Humu"
  },
  {
    name: "Sebastian Markbåge",
    avatar_url: "https://avatars2.githubusercontent.com/u/63648?v=4",
    company: "Facebook"
  }
];

//function component
const CardList = props => (
  <div>
    {testData.map(profile => (
      <Card {...profile} />
    ))}
  </div>
);
```

```javascript
//class component

class Card extends React.Component {
  render() {
    const profile = this.props;
    return (
      <div className="github-profile">
        <img src={profile.avatar_url} />
        <div className="info">
          <div className="name">{profile.name}</div>
          <div className="company">{profile.company}</div>
        </div>
      </div>
    );
  }
}
```

The finalized code can be seen below where we remove the need for mock data and use githubs api to fetch data based on user input. Take note of async keyword when fetching calls. Also and more importantly, the separation of responsibility (though we could extract further).

```javascript
const CardList = props => (
  <div>
    {props.profiles.map(profile => (
      <Card key={profile.id} {...profile} />
    ))}
  </div>
);
```

```javascript
class Card extends React.Component {
  render() {
    const profile = this.props;
    return (
      <div className="github-profile">
        <img src={profile.avatar_url} />
        <div className="info">
          <div className="name">{profile.name}</div>
          <div className="company">{profile.company}</div>
        </div>
      </div>
    );
  }
}
```

```javascript
class Form extends React.Component {
  state = { userName: "" };
  handleSubmit = async event => {
    event.preventDefault();
    const resp = await axios.get(
      `https://api.github.com/users/${this.state.userName}`
    );
    this.props.onSubmit(resp.data);
    this.setState({ userName: "" });
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          value={this.state.userName}
          onChange={event => this.setState({ userName: event.target.value })}
          placeholder="GitHub username"
          required
        />
        <button>Add Card</button>
      </form>
    );
  }
}
```

```javascript
class App extends React.Component {
  state = {
    profiles: []
  };
  addNewProfile = profileData => {
    this.setState(prevState => ({
      profiles: [...prevState.profiles, profileData]
    }));
  };

  render() {
    return (
      <div>
        <div className="header">{this.props.title}</div>
        <Form onSubmit={this.addNewProfile} />
        <CardList profiles={this.state.profiles} />
      </div>
    );
  }
}
```

```javascript
ReactDOM.render(<App title="The GitHub Cards App" />, mountNode);
```

#### Reviewing hooks

Hooks are a new addition in React 16.8. They let you use state and other React features without writing a class.

```javascript
import React, { useState } from "react";

function Example() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
```
