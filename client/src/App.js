import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './page/Home'
import About from './page/About'
import Portfolio from './page/Portfolio'
import Contact from './page/Contact'
import Nav from './components/Nav'


function App() {
  return (
    <main className="">
    <Router>  
      <Nav></Nav>
      <Switch>
        <Route path='/home' component={ Home }/>
        <Route path='/about' component={ About }/>
        <Route path='/portfolio' component={ Portfolio }/>
        <Route path='/contact' component={ Contact }/>
        <Route path='/' component={ Home }/>
      </Switch>
    </Router>
    </main>
  );
}

export default App;
