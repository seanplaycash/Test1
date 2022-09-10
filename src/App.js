import React from 'react';
import Details from './Details';
import Test from './Test';

function App() {

  function pageReset(event) {
    if (event.key === 'a' || event.key === "A") {
      window.location.reload();
    }
  }

  return (
    <>
    <div onKeyPress={pageReset}>
    <Details />
    <Test />
    </div>
    </>
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