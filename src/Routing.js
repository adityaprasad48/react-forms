import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import App from './App'
import Discount from './Discount'
import FriendsArray from './FriendsArray'
import NewObject from './NewObject'
import ProductColorPicker from './ProductColorPicker'
import Products from './Products'
import ResourceArray from './ResourceArray'
import SubResources from './SubResources'

const Routing = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={App}/>
        <Route path="/friends" component={FriendsArray}/>
        <Route path="/resources" component={ResourceArray}/>
        <Route path="/sub" component={SubResources}/>
        <Route path="/coding" component={NewObject}/>
        <Route path="/picker" component={ProductColorPicker}/>
        <Route path="/discount" component={Discount}/>
        <Route path="/products" component={Products}/>
      </Switch>
    </Router>
  )
}

export default Routing
