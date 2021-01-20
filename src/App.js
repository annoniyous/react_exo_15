
import './App.css';
import Article from './components/Article'
import React, { useState } from 'react'

function App() {
  const [title, setTitle] = useState([{titre:"Harry Pooter"},{titre:"Seigneur des annaux"},{titre:"Avengers"}])
  return (
    <div className="App">
    <Article planet={title}/>
    </div>
  );
}

export default App;
