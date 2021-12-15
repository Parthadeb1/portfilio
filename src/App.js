import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import MenuBar from '../src/Components/MenuBar/MenuBar.jsx'
import Home from './Components/Pages/Home/Home';
import About from './Components/Pages/About/About';
import Contact from './Components/Pages/Contact/Contact';
import Projects from './Components/Pages/Projects/Projects';
import Blogs from './Components/Pages/Blogs/Blogs';
import SingleProduct from './Components/Pages/SingleProduct/SingleProduct';
function App() {
  return (
    <div className="">
      <Router>
        <MenuBar/>
        <Switch>
          <Route exact path="/home" component={Home}/>
          <Route  path="/about" component={About}/>
          <Route  path="/contact" component={Contact}/>
          <Route  path="/projects" component={Projects}/>
          <Route  path="/singleProjects/:projectsId" component={SingleProduct}/>
          <Route  path="/blogs" component={Blogs}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
