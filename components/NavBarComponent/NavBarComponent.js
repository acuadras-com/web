import React, { Component } from 'react';

import { Link, Events, animateScroll as scroll, scrollSpy } from 'react-scroll'



export class NavBarComponent extends Component{
  constructor(props){
    super(props);
    this.state = {mnuShow:false};
    this.closeMnu = this.closeMnu.bind(this);
  }

  componentDidMount() {
    Events.scrollEvent.register('begin', ()=> {
      console.log("begin", arguments);
      this.closeMnu();
    });

    Events.scrollEvent.register('end', function() {
      console.log("end", arguments);
    });
    scrollSpy.update();
  }

  componentWillUnmount() {
    Events.scrollEvent.remove('begin');
    Events.scrollEvent.remove('end');
  }

  toggleShow(){
    this.setState({mnuShow:!this.state.mnuShow});
  }

  closeMnu(){
    if(this.state.mnuShow){
      this.setState({mnuShow:false});
    }
  }

  scrollToTop() {
    scroll.scrollToTop();
  }

  render(){
    const show = this.state.mnuShow ? "show" : "";
    return (
      <>
      <nav className={`navbar navbar-expand-lg navbar-light fixed-top ${this.props.navBarShrink}`} id="mainNav">
        <div className="container">
        <img src="/img/logo-nobg.png" alt="logo"  height="50px"    width="200px" />
          <button onClick={this.toggleShow.bind(this)} className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            Menu
            <i className="fa fa-bars"></i>
          </button>
          <div className={`collapse navbar-collapse ${show}`} id="navbarResponsive">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link activeClass="active" className="nav-link js-scroll-trigger" to="download" spy={true} smooth="easeInOutQuart" duration={1000} >¿Eres un comercio?</Link>
              </li>
              <li className="nav-item">
                <Link activeClass="active" className="nav-link js-scroll-trigger" to="features" spy={true} smooth="easeInOutQuart" duration={1000} >Buscar comercio</Link>
              </li>
              <li className="nav-item">
                <Link activeClass="active" className="nav-link js-scroll-trigger" to="contact" spy={true} smooth="easeInOutQuart" duration={1000} >Preguntas frecuentes</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <style jsx > { `
#mainNav {
  border-color: rgba(34, 34, 34, 0.05);
  background-color: #ffffff;
  -webkit-transition: all .35s;
  -moz-transition: all .35s;
  transition: all .35s;
  font-family: 'Catamaran', 'Helvetica', 'Arial', 'sans-serif';
  font-weight: 200;
  letter-spacing: 1px; }
  #mainNav .navbar-brand {
    color: #fdcc52;
    font-family: 'Catamaran', 'Helvetica', 'Arial', 'sans-serif';
    font-weight: 200;
    letter-spacing: 1px; }
    #mainNav .navbar-brand:hover, #mainNav .navbar-brand:focus {
      color: #fcbd20; }
  #mainNav .navbar-toggler {
    font-size: 12px;
    padding: 8px 10px;
    color: #222222; }
  #mainNav .navbar-nav > li > a {
    font-size: 11px;
    font-family: 'Lato', 'Helvetica', 'Arial', 'sans-serif';
    letter-spacing: 2px;
    text-transform: uppercase; }
    #mainNav .navbar-nav > li > a.active {
      color: #fdcc52 !important;
      background-color: transparent; }
      #mainNav .navbar-nav > li > a.active:hover {
        background-color: transparent; }
  #mainNav .navbar-nav > li > a,
  #mainNav .navbar-nav > li > a:focus {
    color: #222222; }
    #mainNav .navbar-nav > li > a:hover,
    #mainNav .navbar-nav > li > a:focus:hover {
      color: #fdcc52; }
  @media (min-width: 992px) {
    #mainNav {
      border-color: transparent;
      background-color: #ffffff }
      #mainNav .navbar-brand {
        color: fade(white, 70%); }
        #mainNav .navbar-brand:hover, #mainNav .navbar-brand:focus {
          color: white; }
      #mainNav .navbar-nav > li > a,
      #mainNav .navbar-nav > li > a:focus {
        color: rgba(0, 0, 0, 0.7); }
        #mainNav .navbar-nav > li > a:hover,
        #mainNav .navbar-nav > li > a:focus:hover {
          color: white; }
      #mainNav.navbar-shrink {
        border-color: rgba(34, 34, 34, 0.1);
        background-color: white; }
        #mainNav.navbar-shrink .navbar-brand {
          color: #222222; }
          #mainNav.navbar-shrink .navbar-brand:hover, #mainNav.navbar-shrink .navbar-brand:focus {
            color: #fdcc52; }
        #mainNav.navbar-shrink .navbar-nav > li > a,
        #mainNav.navbar-shrink .navbar-nav > li > a:focus {
          color: #222222; }
          #mainNav.navbar-shrink .navbar-nav > li > a:hover,
          #mainNav.navbar-shrink .navbar-nav > li > a:focus:hover {
            color: #fdcc52; } }
` } 
</style>
      </>
    );
  }
}
