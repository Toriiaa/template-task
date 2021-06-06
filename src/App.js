
import './App.css';
import TopBar from './TopBar';
import Home from './Home';
import Agric from './Agric'
import Footer from './Footer'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';


function App() {
  return (
    <Router>
      <div className="App">
      <TopBar/>
      <div className="container">
        <Switch>
        <Route path = "/"> 
<Home/>
        </Route>
        <Route path = "/"> 
<Agric/>
        </Route>
        </Switch>
     
      <Footer/>
      </div>
      
    </div>
    </Router>
    
  );
}

export default App;
