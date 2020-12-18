import { BrowserRouter as Router, Switch,  Route} from 'react-router-dom';
import './App.css';

import Navigation from './components/navigation';
import Dashboard from './components/dashboard';
import Settings from './components/settings';
import Reports from './components/reports';
import Shop from './components/shop';
import ItemDetail from './components/itemDetail';

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />


        <Switch/>
        <Route path="/" exact component={Home}/>
        <Route path="/dashboard" component={Dashboard}/>
        <Route path="/reports" component={Reports}/>
        <Route path="/settings" component={Settings}/>
        <Route path="/shop" exact component={Shop}/>
        <Route path="/shop/:id" component={ItemDetail}/>
      </div>
    </Router>
  );
}

const Home = () => (
  <div>
    <h1>Home Page</h1>
  </div>
)

export default App;
