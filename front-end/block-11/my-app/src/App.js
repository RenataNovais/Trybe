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

function App() {
  return <ul>{task(tasks)}</ul>;
}

export default App;
