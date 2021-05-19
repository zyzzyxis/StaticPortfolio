import './App.css';
import NavBar from './components/NavBar';
import { Route, Switch } from 'react-router' 
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import ContactMe from './pages/ContactMe';
import Footer from './components/Footer';


function App() {
  return (
    <>
    
    <div className="App">
    {/* <NavBar /> */}
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/projects" component={Projects} />
      <Route exact path="/connect" component={ContactMe} />
    </Switch>
    <br/>
    <Footer />
    </div>
    </>
  );
}

export default App;
