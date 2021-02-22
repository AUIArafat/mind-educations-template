import my1 from '../../assets/images/my1.jpg'
import my2 from '../../assets/images/my2.jpg'
import my3 from '../../assets/images/my3.jpg'
import my4 from '../../assets/images/my4.jpg'

function MyCourses() {
    return (
        <div id="courses" className="Courses">
            <div className="container-fluid padding_left3">
                <div className="row">
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                        <div className="box_bg">
                            <div className="box_bg_img">
                                <div className="row">
                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                                        <div className="box_my">
                                            <figure><img src={my1} /></figure>
                                            <div className="overlay">
                                                <h3>Data Structures</h3>
                                                <p>It is a long established fact that a reader will be distracted by the readable content o</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                                        <div className="box_my">
                                            <figure><img src={my2}/></figure>
                                            <div className="overlay">
                                                <h3>Cinematography</h3>
                                                <p>It is a long established fact that a reader will be distracted by the readable content o</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                                        <div className="box_my">
                                            <figure><img src={my3} /></figure>
                                            <div className="overlay">
                                                <h3>Skills</h3>
                                                <p>It is a long established fact that a reader will be distracted by the readable content o</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                                        <div className="box_my">
                                            <figure><img src={my4} /></figure>
                                            <div className="overlay">
                                                <h3>Teaching Science</h3>
                                                <p>It is a long established fact that a reader will be distracted by the readable content o</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 border_right">
                        <div className="box_text">
                            <div className="titlepage">
                                <h2>My <strong className="yellow"> Courses</strong></h2>
                            </div>
                            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
                            <a href="Javascript:void(0)">Read more</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MyCourses;