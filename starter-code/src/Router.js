import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import SearchBar from './Components/SearchBar'
import Home from './Components/Home'

export default () => (
  <BrowserRouter>
    <SearchBar/>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route component={() => <p>404</p>} />
    </Switch>
  </BrowserRouter>
)
