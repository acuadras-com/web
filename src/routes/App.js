import React from 'react'
import {BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from '../containers/Home'
import Register from '../containers/Register'
import NotFound from '../containers/NotFound'
import Layout from '../components/LayoutComponent/Layout'

const App = () => (
    <BrowserRouter>
        <Layout>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/registro" component={Register} />
                <Route component={NotFound} />
            </Switch>
        </Layout>
    </BrowserRouter>
)

export default App;