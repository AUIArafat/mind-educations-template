function About(props) {
    return (
        <>
        <div id="about" class="about">
            <div class="container">
                <div class="row">
                    <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                        <div class="about-box">
                            <h2>About <strong class="yellow">Our Game</strong></h2>
                            <p> orem ipsum dolor sit amet, consectetur adipisicing elit. Quas voluptatem maiores eaque similique non distinctio voluptates perspiciatis omnis, repellendus ipsa aperiam, laudantium voluptatum nulla?.
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta, assumenda, vo
          luptatum. Libero eligendi molestias iure error animi totam laudantium, aspernatur similique id eos at consectetur illo culpa,  </p>
                            <a href="Javascript:void(0)">Read more</a>
                        </div>
                    </div>
                    <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                        <div class="about-box">
                            <figure><img src={props.imgSrc} alt="#" /></figure>
                        </div>
                    </div>
                </div>

            </div>
        </div>
        <div id="important" class="important">
        <div class="container">
            <div class="row">
            <div class="col-md-12">
                <div class="titlepage">
                <h2>Some <strong class="yellow">important facts</strong></h2>
                <span>luptatum. Libero eligendi molestias iure error animi totam laudantium, aspernatur similique id eos a
                t consectetur illo culpa,</span>
                </div>
            </div>
            </div>
        </div>
        <div class="important_bg">
            <div class="container">
            <div class="row">

                <div class="col col-xs-12">
                <div class="important_box">
                    <h3>200+</h3>
                    <span>Teachers</span>
                </div>
                </div>
                <div class="col col-xs-12">
                <div class="important_box">
                    <h3>20+</h3>
                    <span>Colleges</span>
                </div>
                </div>
                <div class="col col-xs-12">
                <div class="important_box">
                    <h3>50+</h3>
                    <span>Courses</span>
                </div>
                </div>
                <div class="col col-xs-12">
                <div class="important_box">
                    <h3>200+</h3>
                    <span>Members</span>
                </div>
                </div>
                <div class="col col-xs-12">
                <div class="important_box">
                    <h3>10+</h3>
                    <span>countries</span>
                </div>
                </div>
            </div>
            </div>
        </div>
        </div>
        </>
    )
}

export default About;