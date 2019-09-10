import React from 'react';
import './App.css';
import Title from './components/Title'
import ScoreBoard from './components/ScoreBoard'

class App extends React.Component {
  render(){
    return (
      <div className="App">
        <header className="App-header">
          <Title content="User Bored!"/>
          <ScoreBoard />
        </header>
      </div>
    );
  }
}

export default App;
