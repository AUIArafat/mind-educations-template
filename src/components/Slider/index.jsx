function Slider(props) {
    return (
        <section class="slider_section">
            <div id="myCarousel" class="carousel slide" data-ride="carousel">
                <ol class="carousel-indicators">
                    <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
                    <li data-target="#myCarousel" data-slide-to="1"></li>
                    <li data-target="#myCarousel" data-slide-to="2"></li>
                </ol>
                <div class="carousel-inner">
                    <div class="carousel-item active">

                        <div class="container-fluid padding_dd">
                            <div class="carousel-caption">
                                <div class="row">
                                    <div class="col-xl-5 col-lg-5 col-md-5 col-sm-12">
                                        <div class="text-bg">
                                            <h1>Search your Favorite Course here</h1>
                                            <p>TOP NOTCH COURSES FROM TRAINED PROFESSIONALS</p>
                                            <a href="#">Read more</a> <a href="#">get a qoute</a>
                                        </div>
                                    </div>
                                    <div class="col-xl-7 col-lg-7 col-md-7 col-sm-12">
                                        <div class="images_box">
                                            <figure><img src={props.imgSrc} /></figure>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item">

                        <div class="container-fluid padding_dd">
                            <div class="carousel-caption">

                                <div class="row">
                                    <div class="col-xl-5 col-lg-5 col-md-5 col-sm-12">
                                        <div class="text-bg">
                                            <h1>Search your Favorite Course here</h1>
                                            <p>TOP NOTCH COURSES FROM TRAINED PROFESSIONALS</p>
                                            <a href="#">Read more</a><a href="#">get a qoute</a>
                                        </div>
                                    </div>

                                    <div class="col-xl-7 col-lg-7 col-md-7 col-sm-12">
                                        <div class="images_box">
                                            <figure><img src={props.imgSrc} /></figure>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>


                    <div class="carousel-item">

                        <div class="container-fluid padding_dd">
                            <div class="carousel-caption ">
                                <div class="row">
                                    <div class="col-xl-5 col-lg-5 col-md-5 col-sm-12">
                                        <div class="text-bg">
                                            <h1>Search your Favorite Course here</h1>
                                            <p>TOP NOTCH COURSES FROM TRAINED PROFESSIONALS</p>
                                            <a href="#">Read more</a> <a href="#">get a qoute</a>
                                        </div>
                                    </div>
                                    <div class="col-xl-7 col-lg-7 col-md-7 col-sm-12">
                                        <div class="images_box">
                                            <figure><img src={props.imgSrc} /></figure>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <a class="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#myCarousel" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
            </a>
        </section>

    )
}

export default Slider;