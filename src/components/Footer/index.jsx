import loc from '../../assets/icon/loc.png'
import email from '../../assets/icon/email.png'
import call from '../../assets/icon/call.png'
import fb from '../../assets/icon/fb.png'
import tw from '../../assets/icon/tw.png'
import lin_2 from '../../assets/icon/lin(2).png'
import instagram from '../../assets/icon/instagram.png'
import logo1 from '../../assets/images/logo1.jpg'

function Footer(){
    return(
        <footer>
        <div className="footer ">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <form className="news">
                  <input className="newslatter" placeholder="Email" type="text" name=" Email" />
                  <button className="submit">Subscribe</button>
                </form>
              </div>
              <div className="col-md-12">
                <h2>Newsletter</h2>
                <span>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in</span>
              </div>
              <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 ">
                <div className="row">
                  <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 ">
                    <div className="address">
                      <h3>Contact us </h3>
                      <ul className="loca">
                        <li>
                          <a href="#"><img src={loc} alt="#" /></a>London 145
                          <br />United Kingdom </li>
                        <li>
                          <a href="#"><img src={email} alt="#" /></a>demo@gmail.com </li>
                        <li>
                          <a href="#"><img src={call} alt="#" /></a>+12586954775 </li>
                      </ul>
                      <ul className="social_link">
                        <li><a href="#"><img src={fb} /></a></li>
                        <li><a href="#"><img src={tw} /></a></li>
                        <li><a href="#"><img src={lin_2}/></a></li>
                        <li><a href="#"><img src={instagram} /></a></li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 col-sm-6">
                    <div className="address">
                      <h3>Courses</h3>
                      <ul className="Menu_footer">
                        <li className="active"> <a href="#">Masters Degree</a> </li>
                        <li><a href="#">Post GraduateU</a> </li>
                        <li><a href="#">Ndergraduate</a> </li>
                        <li><a href="#">Engineering</a> </li>
                        <li><a href="#">Ph.D Degree</a> </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 col-sm-6">
                    <div className="address">
                      <h3>Information</h3>
                      <ul className="Links_footer">
                        <li className="active"><a href="#">Campus Tour</a> </li>
                        <li><a href="#">Student Lifes</a> </li>
                        <li><a href="#">Cholarship</a> </li>
                        <li><a href="#"> Admission</a> </li>
                        <li><a href="#">Leadership</a> </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 col-sm-6 ">
                    <div className="address">
                      <a href="index.html"> <img src={logo1} alt="logo" /></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="copyright">
            <div className="container">
              <p>Copyright © 2019 Design by <a href="https://html.design/">Free Html Templates </a></p>
            </div>
          </div>
        </div>
      </footer>

    )
}

export default Footer;