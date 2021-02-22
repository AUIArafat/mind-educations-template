import img2 from '../../assets/images/img2.png';
import logo from '../../assets/images/logo.png';
import search_icon from '../../assets/images/search_icon.png'
import Slider from '../Slider';

function Header() {
    return (
        <header>
            <div class="header-top">
                <div class="header">
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-xl-2 col-lg-4 col-md-4 col-sm-3 col logo_section">
                                <div class="full">
                                    <div class="center-desk">
                                        <div class="logo">
                                            <a href="index.html"><img src={logo} alt="#" /></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-10 col-lg-8 col-md-8 col-sm-9">
                                <div class="header_information">
                                    <div class="menu-area">
                                        <div class="limit-box">
                                            <nav class="main-menu ">
                                                <ul class="menu-area-main">
                                                    <li class="active"> <a href="index.html">Home</a> </li>
                                                    <li> <a href="#courses">My Courses </a> </li>
                                                    <li> <a href="#about">About</a> </li>
                                                    <li> <a href="#learn">My Profile</a> </li>
                                                    <li> <a href="#important">Become an Instructor</a> </li>
                                                    <li> <a href="#contact">Contact</a> </li>
                                                </ul>
                                            </nav>
                                        </div>
                                    </div>
                                    <div class="mean-last">
                                        <a href="#"><img src={search_icon} alt="#" /></a> <a href="#">login/sing up</a></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Slider imgSrc={img2}/>
                </div>
        </header>
    )
}

export default Header;