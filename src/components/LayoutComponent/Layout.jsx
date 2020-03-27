import React, { Component } from 'react';
import NavBarComponent from '../NavBarComponent/NavBarComponent';
import {FooterComponent}  from '../FooterComponent/FooterComponent';
import 'font-awesome/css/font-awesome.css';
import './style.css';

export default class Layout extends Component {

    render() {
        
        const {children, title} = this.props
        return <>
        
            <title>{ title }</title>
            
            
        <NavBarComponent />
        { children }

        <FooterComponent />

        </>
    }
}