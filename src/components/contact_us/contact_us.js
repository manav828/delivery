import React from "react"
import Navbar from "../homepage/home_page_components/navbar"
import "./st1.css"
// import "./st2.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import "./st3.css"
import emailjs from "emailjs-com"

// 'https://youtu.be/sGQSz22U8VM' youtube link for this form

const Contact = () => {

    function sendEmail(e){
        e.preventDefault();

        emailjs.sendForm('service_qujyi8j', 'template_vbzd29h', e.target,'31GvVAC2wX4aiC-d0').then(res=>{
            console.log(res);
        }).catch(err =>console.log(err))
    }
    return (
        <>
        <Navbar />

            <section id="contact" className="contact">
                <div className="container">

                    <div className="section-title">
                        <h2>Contact</h2>
                        <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint
                            consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia
                            fugiat
                            sit in iste officiis commodi quidem hic quas.</p>
                    </div>

                    <div className="row" data-aos="fade-in">

                        <div className="col-lg-5 d-flex align-items-stretch">
                            <div className="info">
                                <div className="address">
                                    <i class="fa fa-map-marker" aria-hidden="true"></i>
                                    <h4>Location:</h4>
                                    <p>139, CHARUSAT Campus, Highway, Off, Nadiad - Petlad Rd, Changa, Gujarat 388421</p>
                                </div>

                                <div className="email">
                                    <i class="fa fa-envelope" aria-hidden="true"></i>
                                    <h4>Email:</h4>
                                    <p>manavss828@gmail.com</p>
                                </div>

                                <div className="phone">
                                    <i class="fa fa-phone" aria-hidden="true"></i>
                                    <h4>Call:</h4>
                                    <p>+91 9033741722</p>
                                </div>

                                <iframe title="myFrame"
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3683.427521248163!2d72.81788001496001!3d22.600505085168457!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e50c43cdea6c7%3A0x5074fe9e0c1c8bd!2sCharotar%20University%20of%20Science%20and%20Technology%20(CHARUSAT)!5e0!3m2!1sen!2sin!4v1667407878819!5m2!1sen!2sin"
                                      className="ifrem"  ></iframe>
                                {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3683.427521248163!2d72.81788001496001!3d22.600505085168457!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e50c43cdea6c7%3A0x5074fe9e0c1c8bd!2sCharotar%20University%20of%20Science%20and%20Technology%20(CHARUSAT)!5e0!3m2!1sen!2sin!4v1667407878819!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
                            </div>

                        </div>

                        <div className="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch">
                            <form method="post" className="php-email-form" onSubmit={sendEmail} >
                                <div className="row">
                                    <div className="form-group col-md-6">
                                        <label for="name">Your Name</label>
                                        <input type="text" name="name" className="form-control" id="name" required />
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label for="name">Your Email</label>
                                        <input type="email" className="form-control" name="email" id="email" required />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label for="name">Phone Number</label>
                                    <input type="number" className="form-control" name="phone" id="subject" required />
                                </div>
                                <div className="form-group">
                                    <label for="name">Message</label>
                                    <textarea className="form-control" name="message" rows="10" required></textarea>
                                </div>
                                <div className="my-3">
                                    <div className="loading">Loading</div>
                                    <div className="error-message"></div>
                                    <div className="sent-message">Your message has been sent. Thank you!</div>
                                </div>
                                <div className="text-center"><button type="submit">Send Message</button></div>
                            </form>
                        </div>

                    </div>

                </div>
            </section>














        </>
    )
}

export default Contact
