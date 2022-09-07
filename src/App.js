import React from 'react';

function App() {
  const [showProject, setShow]=React.useState(true)
  return (
    <div className="App">
      {
        showProject?<h1>Sean's Project</h1>:null 
      }
      {/* <button onClick={()=>setShow(true)}>Show</button>
      <button onClick={()=>setShow(false)}>Hide</button> */}
      <button onClick={()=>setShow(!showProject)}>Show/Hide</button>
    </div>
  );
}

export default App;

// <div className="App">
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
//           Learn React Today 
//         </a>
//         <button type="submit">hello</button>
        
//       </header>
//     </div>