
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import About from './components/About/About';
import Project from './components/Projects/Project';
import Service from './components/Services/Service';
import Carrer from './components/Carrer/Carrer'
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import {Route,Switch} from 'react-router';
import Page1 from './components/Page1/Page1';
import Page2 from './components/page2/Page2';
import Page3 from './components/Page3/Page3';
import Login from './components/Login/Login';
import Register from './components/Signup/Signup';
import Logout1 from './components/Logout1/Logout1';



function App() {
  return (
    <>
    <Navbar/>
<Switch>
<Route exact path='/' component={Home}></Route>
<Route exact path='/About' component={About}></Route>
<Route exact path='/Project' component={Project}></Route>
<Route exact path='/Service' component={Service}></Route>
<Route exact path='/Carrer' component={Carrer}></Route>
<Route exact path='/Contact' component={Contact}></Route>
<Route exact path='/Page1' component={Page1}></Route>
<Route exact path='/Page2' component={Page2}></Route>
<Route exact path='/Page3' component={Page3}></Route>
<Route exact path='/login' component={Login}></Route>
<Route exact path='/register' component={Register}></Route>
<Route exact path='/logout' component={Logout1}></Route>
</Switch>
<Footer/>

    </>
  );
}

export default App;
