import './App.css';
import  Mission from './components/missions.js';
import { Component } from 'react';


class App extends Component{
  render() {
    return (
      <div className='App'>
        <Mission />
      </div>
    );
  }
}

export default App;
