import React from 'react';
import './App.css';
import Dinner from './components/Dinner'

function App() {
  return (
    <div className="App">
      <div className = "dinner-menu">
        <h1>Assignment - 3</h1>
     <Dinner dishName="Nihari" sweetDish="kheer" color="red" />
     <Dinner dishName="Biryani" sweetDish="Custord"/>
     <Dinner dishName="Nihari" sweetDish = "Meetha Paani"/>
     </div>
    </div>
  );
}

export default App;
