import React, { Component } from 'react';
import './style.css';
import { Link, Events, animateScroll as scroll, scrollSpy } from 'react-scroll'
import logo from '../../logo-nobg.png'
import { Link as LinkRoute } from 'react-router-dom';


class NavBarComponent extends Component{
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
      <nav className={`navbar navbar-expand-lg navbar-light fixed-top ${this.props.navBarShrink}`} id="mainNav">
        <div className="container">
        <LinkRoute to="/">
          <img src={logo} alt="logo"  height="50px"    width="200px" />
        </LinkRoute>
          <button onClick={this.toggleShow.bind(this)} className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
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
    );
  }
}
export default NavBarComponent;