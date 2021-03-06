import SimpleMap from "../SimpleMap";

function ContactUs() {
    return (
        <div id="contact" class="contact">
            <div class="container-fluid padding_left2">
                <div class="white_color">
                    <div class="row">
                        <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                            <div id="map">
                                <SimpleMap/>
                            </div>

                        </div>
                        <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12">

                            <form class="contact_bg">
                                <div class="row">
                                    <div class="col-md-12">
                                        <div class="titlepage">
                                            <h2>Contact <strong class="yellow">us</strong></h2>
                                        </div>
                                        <div class="col-md-12">
                                            <input class="contactus" placeholder="Your Name" type="text" name="Your Name" />
                                        </div>
                                        <div class="col-md-12">
                                            <input class="contactus" placeholder="Your Email" type="text" name="Your Email" />
                                        </div>
                                        <div class="col-md-12">
                                            <input class="contactus" placeholder="Your Phone" type="text" name="Your Phone" />
                                        </div>
                                        <div class="col-md-12">
                                            <textarea class="textarea" placeholder="Message" type="text" name="Message"></textarea>
                                        </div>
                                        <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                                            <button class="send">Send</button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
};

export default ContactUs;