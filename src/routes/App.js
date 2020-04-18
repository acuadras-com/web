import React from 'react'
import {BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from '../containers/Home'
import Register from '../containers/Register'
import TermsAndConditions from '../containers/TermsAndConditions'
import Login from '../containers/Login'
import {Register as CustomerRegister}  from '../containers/customer/Register'
import NotFound from '../containers/NotFound'
import Layout from '../components/LayoutComponent/Layout'
import EditProfile from '../containers/shop/EditProfile'
import BasicInformation from '../containers/shop/profile/BasicInformation'
import Hours from '../containers/shop/profile/Hours'
import EditCategory from '../containers/shop/profile/EditCategory'
import {Profile} from '../containers/shop/Profile'


import { CustomerMain } from '../containers/customer/CustomerMain';

const App = () => (
    <BrowserRouter>
        <Layout>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/registro" component={Register} />
                <Route exact path="/registro-usuario" component={CustomerRegister} />
                <Route exact path="/perfil-comercio" component={Profile} />
                <Route exact path="/principal" component={CustomerMain} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/terminos" component={TermsAndConditions} />
                <Route exact path="/editar-perfil" component={EditProfile} />
                <Route exact path="/editar-informacion-basica" component={BasicInformation} />
                <Route exact path="/editar-horario" component={Hours} /> 
                <Route exact path="/editar-categoria" component={EditCategory} />                               
                <Route component={NotFound} />
            </Switch>
        </Layout>
    </BrowserRouter>
)

export default App;