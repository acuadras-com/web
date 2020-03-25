import React, { Component } from 'react';

export const SocialComponent = (props)=>{
  return <> <section className="contact bg-primary" id="contact">
    <div className="container">
      <h2>Vuelvete nuestro amigo
        en redes sociales!
        <i className="fa fa-heart"></i>
        </h2>
      <ul className="list-inline list-social">
        <li className="list-inline-item social-twitter">
          <a href="#">
            <i className="fa fa-twitter"></i>
          </a>
        </li>
        <li className="list-inline-item social-facebook">
          <a href="#">
            <i className="fa fa-facebook"></i>
          </a>
        </li>
        <li className="list-inline-item social-google-plus">
          <a href="#">
            <i className="fa fa-google-plus"></i>
          </a>
        </li>
      </ul>
    </div>
  </section>
  <style jsx > { `
section.contact {
  color: white;
  text-align: center; }
  section.contact h2 {
    margin-top: 0;
    margin-bottom: 25px; }
    section.contact h2 i {
      color: #dd4b39; }
  section.contact ul.list-social {
    margin-bottom: 0; }
    section.contact ul.list-social li a {
      font-size: 40px;
      line-height: 80px;
      display: block;
      width: 80px;
      height: 80px;
      color: white;
      border-radius: 100%; }
    section.contact ul.list-social li.social-twitter a {
      background-color: #1da1f2; }
      section.contact ul.list-social li.social-twitter a:hover {
        background-color: #0d95e8; }
    section.contact ul.list-social li.social-facebook a {
      background-color: #3b5998; }
      section.contact ul.list-social li.social-facebook a:hover {
        background-color: #344e86; }
    section.contact ul.list-social li.social-google-plus a {
      background-color: #dd4b39; }
      section.contact ul.list-social li.social-google-plus a:hover {
        background-color: #d73925; }
` } 
</style>
  </>
};