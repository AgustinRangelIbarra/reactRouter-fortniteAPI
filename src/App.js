import { BrowserRouter as Router, Switch,  Route} from 'react-router-dom';
import './App.css';
import React, { useState } from 'react'


import Navigation from './components/navigation';
import Dashboard from './components/dashboard';
import Settings from './components/settings';
import Reports from './components/reports';
import Shop from './components/shop';
import ItemDetail from './components/itemDetail';
import Tweets from './components/Tweets';
import Home from './components/home'

function App() {
  // state - js obj. that contains a piece of data.
  /**
   * The state reacts to changes if it gets updated or changed,
   * the component is gonna rerender.
   * Piece of state that tells you a random msg with True or False
   * Then its gonna REACT to the changes
   */

 
  const [toggle, settoggle] = useState(false);
  // const [videos, setVideos] = useState(['Video1', 'video2', 'Vide3']);

  const toggler = () => {
    settoggle(prev => !prev);
  }
  
  return (
    <Router>
      <div className="App">
        <div className="home">

          <Navigation toggle={toggle}/>
          <Home settoggle={toggler}/>
          <hr/>

          <Switch/>
          {/* <Route path="/home" exact component={Home}/> */}
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/reports" component={Reports}/>
          <Route path="/settings" component={Settings}/>
          <Route path="/shop" exact component={Shop}/>
          <Route path="/shop/:id" component={ItemDetail}/>
          <Route path="/tweets" component={Tweets}/>
        </div>
      </div>
    </Router>
  );
}



export default App;
