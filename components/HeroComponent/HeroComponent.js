import demoScreen1 from './img/search-internet.png';

export const HeroComponent = (props)=>{

  return <> <header className="masthead">
    <div className="container h-100">
      <div className="row h-100">
        <div className="col-lg-7 my-auto">
          <div className="header-content mx-auto">
            <h1 className="mb-5">Permite que clientes cercanos te encuentren y te hagan pedidos</h1>
            <a href="#download" className="btn btn-outline btn-xl js-scroll-trigger">Uneté Ahora Totalmente gratis</a>
          </div>
        </div>
        <div className="col-lg-5 my-auto">
          <div className="device-container">
            <div className="device-mockup iphone6_plus portrait white">
              <div className="device">
                <div className="screen">
                  <img src={demoScreen1} className="img-fluid" alt="" />
                </div>
                <div className="button">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
  
<style jsx > { `
header.masthead {
  position: relative;
  width: 100%;
  padding-top: 150px;
  padding-bottom: 100px;
  color: white;
  background-color: #1D7601;
  }
  header.masthead .header-content {
    max-width: 500px;
    margin-bottom: 100px;
    text-align: center; }
    header.masthead .header-content h1 {
      font-size: 30px; }
  header.masthead .device-container {
    max-width: 325px;
    margin-right: auto;
    margin-left: auto; }
    header.masthead .device-container .screen img {
      border-radius: 3px; }
  @media (min-width: 992px) {
    header.masthead {
      height: 100vh;
      min-height: 775px;
      padding-top: 0;
      padding-bottom: 0; }
      header.masthead .header-content {
        margin-bottom: 0;
        text-align: left; }
        header.masthead .header-content h1 {
          font-size: 50px; }
      header.masthead .device-container {
        max-width: 325px; } }
` } 
</style>
  </>
};