import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Home from './components/Pages/Home'
import About from './components/Pages/About'
import Contact from './components/Pages/Contact'
import Error from './components/Pages/Error'
import Navbar from './components/layout/Navbar'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import AddUser from './components/users/AddUser';
import EditUser from './components/users/EditUser';
import User from './components/users/User';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/about" component={About}/>
          <Route exact path="/contact" component={Contact}/>
          <Route exact path="/users/add" component={AddUser}/>
          <Route exact path="/users/edit/:id" component={EditUser}/>
          <Route exact path="/users/:id" component={User}/>
          <Route component={Error}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
