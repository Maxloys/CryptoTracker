import React from 'react'

import {MiddleSection, Navbar, TopComponent} from './components'

function App() {
  return (
      <div className="App">
        <TopComponent/>
        <div style={{display:'flex'}}>
          <Navbar/>
          <MiddleSection/>
        </div>
      </div>
  );
}

export default App;
