import React, { Component } from 'react';

import './App.css';
import {CallToActionComponent} from '../components/CallToActionComponent/CallToActionComponent';
import {FeaturesComponent} from '../components/FeaturesComponent/FeaturesComponent';
import {HeroComponent} from '../components/HeroComponent/HeroComponent';
import {SocialComponent} from '../components/SocialComponent/SocialComponent';

class Home extends Component {
  constructor(props){
    super(props);
    this.state={navBarShrink:""};
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount(){
    window.addEventListener('scroll', this.handleScroll);
    this.handleScroll();
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll(event){
    const nbs = window.pageYOffset>100 ? "navbar-shrink" : "";
    this.setState({navBarShrink:nbs});
  }

  render() {
    
    return (
      <>
        
        <HeroComponent />        
        <FeaturesComponent />
        <CallToActionComponent />
        <SocialComponent />

      </>
    );
  }
}

export default Home;
