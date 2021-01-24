import React from 'react'
import Counter from './Counter/'
import Todo from './Todo/'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    <Router>
      <div>


        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
          <a className="navbar-brand" href="#">Crampete</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <Link className="nav-item nav-link" to="/counter">Counter</Link>
              <Link className="nav-item nav-link" to="/todos">Todos</Link>
            </div>
          </div>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/counter">
            <Counter></Counter>
          </Route>
          <Route path="/todos">
            <Todo></Todo>
          </Route>
          <Route path="/">
            <Counter></Counter>
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App;

/*
classNameName = camel
classNameName = Pascal
className_name = snake // python
*/