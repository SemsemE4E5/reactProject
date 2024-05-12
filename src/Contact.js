import * as React from "react";
import './Contact.css';

function Contact() {
    return (
        <>
            <section className="container-fluid" id="Contact">
                <div className="div1">
                    <h2>Contact Us</h2>
                    <div className="separator"></div>

                    <div className="div2">
                        <h2> <i className="fa-solid fa-location-dot"></i> <h3> Tala : Egypt </h3> </h2>
                        <h2> <i className="fa-solid fa-phone"></i> <h3> Phone : +1(1524)296-6758 </h3></h2>
                        <h2> <i className="fa-regular fa-envelope"></i> <h3> Email : Info@gmail.com </h3> </h2>
                    </div>

                    <div className="div3">
                        <p>Let's Get In Touch, Send Us A Message</p>
                    </div>

                    <form action="">
                        <div className="form-group">
                            <label htmlFor="name">Name:</label>
                            <input type="text" id="name" name="name" placeholder="Enter your name" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email:</label>
                            <input type="email" id="email" name="email" placeholder="Enter your email" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="subject">Subject:</label>
                            <input type="text" id="subject" name="subject" placeholder="Enter the subject" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Message:</label>
                            <textarea id="message" name="message" rows="4" placeholder="Enter your message"></textarea>
                        </div>
                        <button type="submit" className="btn btn-outline-success">Send A Message</button>
                    </form>
                </div>
            </section>
        </>
    )
}

export default Contact;
