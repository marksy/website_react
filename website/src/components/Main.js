import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from './Home'
import Work from './Work'
import Contact from './Contact'
import Login from './Login'
import Admin from './Admin'

const Main = (props) => {
    return (
      <main>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/work' component={Work} />
          <Route exact path='/contact' component={Contact} />
          <Route exact path='/login' component={Login} />
        <Route exact path='/admin' component={Admin} />
        </Switch>
      </main>
    )
}

export default Main;
