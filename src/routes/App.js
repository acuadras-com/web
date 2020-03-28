import React from 'react'
import {BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from '../containers/Home'
import Register from '../containers/Register'
import {Register as CustomerRegister}  from '../containers/customer/Register'
import NotFound from '../containers/NotFound'
import Layout from '../components/LayoutComponent/Layout'
import {Profile} from '../containers/shop/Profile'
import SecondRegister from '../containers/shop/SecondRegister';


const App = () => (
    <BrowserRouter>
        <Layout>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/registro" component={Register} />
                <Route exact path="/registro-usuario" component={CustomerRegister} />
                <Route exact path="/perfil-comercio" component={Profile} />
                <Route exact path="/2-registro" component={SecondRegister} />
                <Route component={NotFound} />
            </Switch>
        </Layout>
    </BrowserRouter>
)

export default App;