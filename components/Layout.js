import Head from 'next/head'

export default class Layout extends React.Component {

    render() {
        
        const {children, title} = this.props
        return <>
        <Head>
            <title>{ title }</title>
            <meta charSet="utf-8" key="chartset"></meta>
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"></meta>
            <meta name="description" content=""></meta>
            <meta name="author" content=""></meta>
            <link rel="manifest" href="%PUBLIC_URL%/manifest.json"></link>
            <link rel="shortcut icon" href="%PUBLIC_URL%/favicon.ico"></link>
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/css/bootstrap.min.css" integrity="sha384-PsH8R72JQ3SOdhVi3uxftmaW6Vc51MKb0q5P2rRUpPvrszuE4W1povHYgTpBfshb" crossOrigin="anonymous"></link>
            <link href="https://fonts.googleapis.com/css?family=Lato" rel="stylesheet"></link>
            <link href="https://fonts.googleapis.com/css?family=Catamaran:100,200,300,400,500,600,700,800,900" rel="stylesheet"></link>
            <link href="https://fonts.googleapis.com/css?family=Muli" rel="stylesheet"></link>
            <link href="../device-mockups/device-mockups.css" rel="stylesheet"></link>
            
        </Head>
        { children }

        
<style jsx global > { `
/*!
* Start Bootstrap - New Age v4.0.0-beta.2 (https://startbootstrap.com/template-overviews/new-age)
* Copyright 2013-2017 Start Bootstrap
* Licensed under MIT (https://github.com/BlackrockDigital/startbootstrap-new-age/blob/master/LICENSE)
*/
html,
body {
  width: 100%;
  height: 100%; }

body {
  font-family: 'Muli', 'Helvetica', 'Arial', 'sans-serif'; }

a {
  color: #fdcc52;
  -webkit-transition: all .35s;
  -moz-transition: all .35s;
  transition: all .35s; }
  a:hover, a:focus {
    color: #fcbd20; }

hr {
  max-width: 100px;
  margin: 25px auto 0;
  border-width: 1px;
  border-color: rgba(34, 34, 34, 0.1); }

hr.light {
  border-color: white; }

h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: 'Catamaran', 'Helvetica', 'Arial', 'sans-serif';
  font-weight: 200;
  letter-spacing: 1px; }

p {
  font-size: 18px;
  line-height: 1.5;
  margin-bottom: 20px; }

section {
  padding: 100px 0; }
  section h2 {
    font-size: 50px; }


.bg-primary {
  background: rgb(52, 202, 6);
  background: -webkit-linear-gradient(rgb(52, 202, 6), #1D7601);
  background: linear-gradient(rgb(52, 202, 6), #1D7601); }

.text-primary {
  color: #fdcc52; }

.no-gutter > [class*='col-'] {
  padding-right: 0;
  padding-left: 0; }

.btn-outline {
  color: white;
  border: 1px solid;
  border-color: white; }
  .btn-outline:hover, .btn-outline:focus, .btn-outline:active, .btn-outline.active {
    color: white;
    border-color: #fdcc52;
    background-color: #fdcc52; }

.btn {
  border-radius: 300px;
  font-family: 'Lato', 'Helvetica', 'Arial', 'sans-serif';
  letter-spacing: 2px;
  text-transform: uppercase; }

.btn-xl {
  font-size: 11px;
  padding: 15px 45px; }
` } 
</style>
        </>
    }
}