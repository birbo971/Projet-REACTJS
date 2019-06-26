import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import registerServiceWorker from './registerServiceWorker';
import { Route, Router, Switch } from 'react-router-dom';
import Services from'./components/Pages/Services';
import Notfound from'./NotFound';
import About from'./components/Pages/About';
import Interface from'./components/Pages/Patients/Interface';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import store from './_redux/store';
import history from './history';
//import thunk from 'redux-thunk';
//import { createStore, applyMiddleware, compose } from 'redux';

const routing = (
    <Provider store={store}>
        <Router history={history}>
        <div>
            <Switch>
            <Route exact path="/" component={App} />
            <Route path="/Services" component={Services} />
            <Route path="/About" component={About} />
            <Route path="/Interface" component={Interface} />
            <Route component={Notfound} />
            </Switch>
        </div>
        </Router>
    </Provider>
  )
ReactDOM.render(routing, document.getElementById('root'))
registerServiceWorker()
