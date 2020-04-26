import React from 'react'
import {BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from '../containers/Home'
import Register from '../containers/Register'
import TermsAndConditions from '../containers/TermsAndConditions'
import Login from '../containers/Login'
import {Register as CustomerRegister}  from '../containers/customer/Register'
import NotFound from '../containers/NotFound'
import Layout from '../components/LayoutComponent/Layout'
import {Profile} from '../containers/shop/Profile'
import SettingProfile from '../containers/shop/SettingProfile';

import SelectService from '../containers/customer/SelectService';
import CustomerMain from '../containers/customer/CustomerMain';
import {Favorites} from '../containers/customer/protecteds/Favorites';
import {UserNotAuth} from '../containers/UserNotAuth';

import Context from '../Context'


const App = () => (
    <BrowserRouter>
        <Layout>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/registro" component={Register} />
                <Route exact path="/registro-usuario" component={CustomerRegister} />
                <Route exact path="/perfil-comercio" component={Profile} />
                <Route exact path="/setting-profile-shop" component={SettingProfile} />
                <Route exact path="/principal" component={CustomerMain} />
                <Route exact path="/index" component={SelectService} />
                <Route exact path="/login" component={Login} />
                <Context.Consumer>
                    {
                        ({isAuth}) =>
                        isAuth
                        ? <Route exact path="/favorites" component={Favorites} />
                        : <Route exact path="/favorites" component={UserNotAuth} />     
                    }
                </Context.Consumer>            
                <Route component={NotFound} />
            </Switch>
        </Layout>
    </BrowserRouter>
)

export default App;