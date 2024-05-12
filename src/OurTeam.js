import * as React from "react";
import './OurTeam.css';

function OurTeam() {
    return (
        <>
            <section className="container-fluid" id="About">
                <div className="div1">
                    <h2><span>Our</span> Team</h2>
                </div>

                <div className="div2">
                    <div className="card">
                        <img src="https://mymodernmet.com/wp/wp-content/uploads/2019/09/100k-ai-faces-5.jpg" alt="Team Member 1"/>
                        <div className="card-body">
                            <h3 className="card-title">Mai Ali</h3>
                            <p className="card-text">Administrator</p>
                            <div className="separator"></div>
                            <div>
                                <p><i className="fa-solid fa-phone"></i> <span> Phone : +1(1524)296-6758 </span></p>
                                <p><i className="fa-regular fa-envelope"></i> <span> Email : Info@gmail.com </span></p>
                            </div>
                        </div>
                    </div>

                    {/* Add more team member cards here */}

                </div>

                <div className="div3">
                    <div></div>
                    <h2> <span> Request </span> a Call Back</h2>
                    <form action="">
                        <input type="text" name="firstName" placeholder="First Name" />
                        <input type="tel" name="phoneNumber" placeholder="Phone Number" />
                        <input type="text" name="discussionTopic" placeholder="I would like to discuss" />
                        <button type="submit">Submit</button>
                    </form>
                </div>
            </section>
        </>
    )
}

export default OurTeam;
