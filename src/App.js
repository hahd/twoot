import React from 'react';
import Sidebar from './Sidebar';
import Feed from './Feed';
import './App.css';


function App() {
  return (
    <div className="app">
     
     <h2> </h2>
     {/*sidebar*/}
      <Sidebar />
     {/*Feed*/}
      <Feed/>
     {/*Widgets*/}
    </div>
  );
}

export default App;
