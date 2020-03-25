import Layout from '../components/Layout';
import {HeroComponent} from '../components/HeroComponent/HeroComponent';
import {NavBarComponent} from '../components/NavBarComponent/NavBarComponent';
import {FeaturesComponent} from '../components/FeaturesComponent/FeaturesComponent';
import {CallToActionComponent} from '../components/CallToActionComponent/CallToActionComponent';
import {SocialComponent} from '../components/SocialComponent/SocialComponent';
import {FooterComponent}  from '../components/FooterComponent/FooterComponent';



class App extends React.Component {
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
        //const domNode = ReactDOM.findDOMNode(this.navEl);
        const nbs = window.pageYOffset>100 ? "navbar-shrink" : "";
        this.setState({navBarShrink:nbs});
      }
    render() {
        const nbs = this.state ? this.state.navBarShrink : "";

        return (
        <>
            <NavBarComponent navBarShrink = {nbs} />
            <Layout title="TuTendero - Los comercios de tu barrio en un solo lugar">
                <HeroComponent />
                <FeaturesComponent />
                <CallToActionComponent />
                <SocialComponent />
                <FooterComponent />
            </Layout>
        </>
        );
    }
}
export default App;