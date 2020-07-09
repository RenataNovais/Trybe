import React from 'react';
// import logo from './logo.svg';
import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// function App() {
//   return (
//   <div className="App">
//   {element2}
//   <h1>Hello World</h1>
//   {element1}
//   </div>
//   )
// }

// const element1 = (
//   <h1 className="greeting">
//   Hello, World! Teste!
//   </h1>
// )
  
// const element2 = React.createElement(
//   'h1',
//   { className: "greeting" },
//   'Hello, World!'
// ) 
const tasks = ['dormir', 'comer', 'assistir netflix'];

const task = (value) => {
  return value.map(item => 
    <li>{item}</li>
  );
}

// freeCodeCamp exs
// ex1
const JSX = <h1>Hello JSX!</h1>;
// ex2 JSX more complex
const JSX2 = <div>
  <h1>Hello</h1>
  <p>Who is here</p>
  <ul>
    <li>Renata</li>
    <li>Marina</li>
    <li>Luiza</li>
  </ul>
</div>
// ex3 learning how to add a comment
const JSX3 = (
  <div>
    {/* leaving my comment */}
    <h1>This is a block of JSX</h1>
    <p>Here's a subtitle</p>
  </div>
);
// ex4 Render HTML Elements to the DOM
const JSX4 = (
  <div>
    <h1>Hello World</h1>
    <p>Lets render this to the DOM</p>
  </div>
);
  // change code below this line (answer is commented because render is in index.js, for App());
  // ReactDOM.render(JSX4, document.getElementById('challenge-node'));
// ex5 Define an HTML Class in JSX
const JSX5 = (
  <div className='myDiv'>
    <h1>Add a class to this div</h1>
  </div>
);
// ex6 Learn About Self-Closing JSX Tags
const JSX6 = (
  <div>
    <h2>Welcome to React!</h2> <br />
    <p>Be sure to close all tags!</p>
    <hr />
  </div>
);
// ex7 Create a Stateless Functional Component
const MyComponent = function() {
  // change code below this line
  return (
    <div>Creating Component with a div using function</div>
  );
  // change code above this line
}
// ex8 Create a React Component
class MyComponent1 extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    // change code below this line
    return (
      <div>
        <h1>Hello React!</h1>
      </div>
    );
    // change code above this line
  }
};
// ex9 Create a Component with Composition
const ChildComponent = () => {
  return (
    <div>
      <p>I am the child</p>
    </div>
  );
};

class ParentComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>I am the parent</h1>
        { /* change code below this line */ }
        <ChildComponent />
        { /* change code above this line */ }
      </div>
    );
  }
};


function App() {
  return (
    <div>
      <h1>{JSX}</h1>
      <ul>{task(tasks)}</ul>;
      <p>{JSX2}</p>
      {/*Não inclui o JSX3 porque o objetivo dele era ver o comentario*/}
      <h6>{JSX4}</h6>
      <h6>{JSX5}</h6>
      <h6>{JSX6}</h6>
      <h3><MyComponent /></h3>
      <MyComponent1 />
      <ParentComponent />
    </div>
  );
}

export default App;
