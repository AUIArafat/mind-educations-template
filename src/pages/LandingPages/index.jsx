import About from "../../components/About";
import Layout from "../../components/Layout";
import about from '../../assets/images/about.jpg'
import MyCourses from "../../components/MyCourses";
import ContactUs from "../../components/ContactUs";
import MyProfile from "../../components/MyProfile";

function LandingPages() {
    return(
        <Layout>
            <About imgSrc={about}/>  
            <MyCourses/>
            <MyProfile/>
            <ContactUs/>  
        </Layout>
    )
}

export default LandingPages;