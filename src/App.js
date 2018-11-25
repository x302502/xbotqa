import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import LevelOnePage from './page/LevelOnePage';
import YoutubePage from './page/YoutubePage';
import LevelTwoPage from './page/LevelTwoPage';

const styles = { fontSize: 20, fontWeight: 'bold', display: 'inline-block', 'marginRight': 10 };

class App extends Component {

  render() {
    return (
      <div style={{ marginLeft: 15, }}>

        <Router>
          <div>
            <Link to="/"><p style={styles}>LEVEL 1</p></Link>
            <Link to="/two"> <p style={styles}>LEVEL 2</p></Link>
            <Link to="/youtube"> <p style={styles}>LEVEL 3</p></Link>

            <Route exact path="/" component={LevelOnePage} />
            <Route path="/two" component={LevelTwoPage} />
            <Route path="/youtube" component={YoutubePage} />
          </div>
        </Router>

      </div>
    );
  }
}

export default App;
