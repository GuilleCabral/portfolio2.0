import React from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Home from './components/home';
import Contact from './components/contact';
import Education from './components/education';
import Projects from './components/projects';
import Skills from './components/skills';

const App = () => {

    return (
      <BrowserRouter>
        <div className="app container-fluid">
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/contact' component={Contact}/>
            <Route path='/education' component={Education}/>
            <Route path='/projects' component={Projects}/>
            <Route path='/skills' component={Skills}/>
            <Skills />
          </Switch>
        </div>
      </BrowserRouter>
    )
}

export default App;
