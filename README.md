This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## This is going to be my sandbox for learning React!

I will be updating this project frequently with a lot of beginner React code.


## Why React?
* I like the idea of using React because it is a library and not a framework.
* Want to work with a virtual browser
* React is just Javascript
* React is battle tested!
* React is declarative for dynamic data

## React Basic Concepts
#### Components
* like functions
* Input: props, state | Output: UI
* Reusable and composable
* Can manage a private state
#### Reactive Updates
* React will react
* Take updates to the browser
#### Virtual views in memory
* Generate HTML using JS
* No HTML template language

#### React Components
* Function Components
* Class Components

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
The above code will not throw a syntaxt error because the `return` line is *not* HTML it is JSX
In this case we would be using Babel to compile the above code and Babel will take care of the rest.

## Component names need to start with an Uppercase first letter!

### Function reference
```javascript
function logRandom(){
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
  const handleClick = () => setCounter(counter*2);
    return (
    <button onClick={handleClick}>
    {counter}
    </button>
    );
}

ReactDOM.render(
  <Button />, 
  document.getElementById('mountNode'),
);
```
Below is an example of passing data and function from parent to children and an example of *Responsibility Isolation*

```javascript
function Button(props) {
    return (
    <button onClick={props.onClickFunc}>
    *2
    </button>
    );
}

function Display(props) {
  return (
    <div>
    {props.message}
    </div>
  );
}


function App(){
  const [counter, setCounter] = useState(5);
  const incrementCounter = () => setCounter(counter*2);
  return(
  <div>
    <Button onClickFunc={incrementCounter}/>
    <Display message={counter}/>
  </div>
  );
}

ReactDOM.render(
  <App />, 
  document.getElementById('mountNode'),
);
```

And finally our completed example which allows us to pass in different values to our onClick function

```javascript
function Button(props) {
  const handleClick = () => props.onClickFunc(props.increment);
  return (
    <button onClick={handleClick}>
    +{props.increment}
    </button>
    );
}

function Display(props) {
  return (
    <div>
    {props.message}
    </div>
  );
}


function App(){
  const [counter, setCounter] = useState(0);
  const incrementCounter = (incrementValue) => setCounter(counter+incrementValue);
  return(
  <div>
    <Button onClickFunc={incrementCounter} increment={1}/>
    <Button onClickFunc={incrementCounter} increment={5}/>
    <Button onClickFunc={incrementCounter} increment={10}/>
    <Button onClickFunc={incrementCounter} increment={100}/>
    <Display message={counter}/>
  </div>
  );
}

ReactDOM.render(
  <App />, 
  document.getElementById('mountNode'),
);
```

### Benefit of using React to create HTML elements
In the code below, both the `render() & ReactDOM.render()` do the exact same thing except `React.DOM.render()` is smart enough to only update the `time` where as the `render()` updates the entire div.

```javascript
const render = () => {
  document.getElementById('mountNode').innerHTML = `
<div>
  Hello HTML
  <input />
<pre>
  ${(new Date).toLocaleTimeString()}
</pre>

</div>
`;

ReactDOM.render(
  React.createElement(
    "div",
    null,
    "Hello React",
    React.createElement('input', null),
    React.createElement('pre', null,(new Date).toLocaleTimeString()),
  ),
  document.getElementById('mountNode2'),
);
}

setInterval(render, 1000);
```
------------------------
## EcmaScript Review

* Block scope is the same as Java -> { }
* Use *let* and *const* instead over *var* 

#### Arrow Functions

all three of the below examples are valid

```javascript
const square1 = (a) => {
    return a*a;
};

const square2 = (a) => a*a;

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
const {PI, E, SQRT2} = Math;
```
Additionally we can destructure objects to grab the property we need (see below)
```javascript
const circle = {
    label: 'circleX',
    radius: 2,
};

const circleArea = ({radius}) =>
    (PI * radius * radius).toFixed(2);
console.log(
    circleArea(circle)
);
```
