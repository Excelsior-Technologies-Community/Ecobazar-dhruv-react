import { faEnvelope, faLocationDot, faPhoneVolume } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; 
import React from 'react';

function ContactUs() {
    return (
        <>
            <div className="container my-5">
                <div className="row">
                    {/* Contact Details */}
                    <div className="col-md-4">
                        <div className="card p-4 shadow-sm">
                            <div className="text-center">
                            <FontAwesomeIcon icon={faLocationDot} style={{height:"40px" , color:"green"}}/>
                                <p className="mt-2 ps-5 pe-5">2715 Ash Dr. San Jose, South Dakota 83475</p>
                            </div>
                            <hr />
                            <div className="d-flex align-items-center flex-column gap-1 ">
                            <FontAwesomeIcon icon={faEnvelope}  style={{height:"40px" , color:"green"}}/>
                                <span className="mt-1">proxy@gmail.com</span>
                                <span>help.proxy@gmail.com</span>
                            </div>
                            <hr />
                            <div className="d-flex align-items-center flex-column gap-1 text-center">
                            <FontAwesomeIcon icon={faPhoneVolume}  style={{height:"40px" , color:"green"}}/>
                                <span className="  mt-1">(219) 555-0114</span>
                                <span className=''>(164) 333-0487</span>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="col-md-8">
                        <div className="card p-4 shadow-sm">
                            <h4>Just Say Hello!</h4>
                            <p className="text-muted" style={{width:"70%"}}>
                                Do you fancy saying hi to me or you want to get started with your project? 
                                Feel free to contact me.
                            </p>
                            <form>
                                <div className="row g-3">
                                    <div className="col-md-6">
                                        <input type="text" className="form-control" placeholder="Template Cookie" />
                                    </div>
                                    <div className="col-md-6">
                                        <input type="email" className="form-control" placeholder="zakirsoft@gmail.com" />
                                    </div>
                                </div>
                                <div className="mt-3">
                                    <input type="text" className="form-control" placeholder="Hello!" />
                                </div>
                                <div className="mt-3">
                                    <textarea className="form-control" placeholder="Subjects" rows="4"></textarea>
                                </div>
                                <button className="btn btn-success mt-4">Send Message</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            {/* Google Map */}
            <div className="container-fluid my-5">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.4078667405265!2d72.50516137509247!3d23.0455038791577!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e84ac539ac151%3A0x6acae7cc1aec8366!2sExcelsior%20Technologies%C2%AE!5e0!3m2!1sen!2sin!4v1742534243068!5m2!1sen!2sin"
                    className="w-100"
                    height="350"
                    style={{ border: "0" }}
                    allowFullScreen
                    loading="lazy"
                ></iframe>
            </div>
        </>
    );
}

export default ContactUs;
