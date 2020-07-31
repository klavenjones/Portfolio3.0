import React, { Component } from 'react'
import ReactDOM from 'react-dom'
// Create Import File
import './index.scss'

import Home from './components/home/Home.jsx'
import Contact from './components/contact/Contact.jsx'
import PortfolioDetails from './components/portfolio/PortfolioDetails.jsx'
import ServiceDetails from './components/service/ServiceDetails.jsx'

import { BrowserRouter, Switch, Route } from 'react-router-dom'
import * as serviceWorker from './serviceWorker'

export class Root extends Component {
  render() {
    return (
      <BrowserRouter basename={'/'}>
        <Switch>
          <Route exact path={`${process.env.PUBLIC_URL}/`} component={Home} />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/contact`}
            component={Contact}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/portfolio-details`}
            component={PortfolioDetails}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/service-details`}
            component={ServiceDetails}
          />
        </Switch>
      </BrowserRouter>
    )
  }
}

ReactDOM.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
