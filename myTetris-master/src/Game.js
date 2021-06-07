import React, { Component } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom'
import "../src/Game.css"


import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducers from './reducers'

import GridBoard from './Components/grid-board'
import NextBlock from './Components/next-block'
import ScoreBoard from './Components/score-board'
import Controls from './Components/controls'
import MessagePopup from './Components/message-popup'


const store = createStore(reducers)

class App extends Component {
  render() {
    return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Tetris Redux</h1>
        </header>
        <GridBoard />
        <NextBlock />
        <ScoreBoard />
        <Controls />
        <MessagePopup />
      </div>
      </Provider>
  );
}
}
export default App;
 