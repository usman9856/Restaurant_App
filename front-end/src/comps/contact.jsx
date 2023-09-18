import React from "react";
import "./css/contact.css";

function Contact() {
    return (
        <div className="body">
            <div className="contact-container">
                <div className="contact-info">
                    <h2>Contact</h2>
                    <p>Phone: 0311-XXXXXXX</p>
                    <p>Mobile: 0314-XXXXXXX</p>
                </div>
                <div className="contact-info">
                    <h2>Location</h2>
                    <p>
                        Visit us on Google Maps:
                        <a
                            href="https://www.google.com/maps/place/Smarnovative+Labs/@31.4525689,74.2661707,18z/data=!4m6!3m5!1s0x391901ff71146229:0xc30289f7d2cd25a9!8m2!3d31.4531958!4d74.2665194!16s%2Fg%2F11kl_qtm41?entry=ttu"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Johar Town
                        </a>
                    </p>
                </div>

                <div className="contact-info">
                    <h2>Email</h2>
                    <p>Email: restaurant@gmail.com</p>
                </div>
                <div className="contact-info">
                    <h2>Suggestions</h2>
                    <p>We welcome your feedback and suggestions.</p>
                </div>
                <div class="ocean">
                    <div class="wave"></div>
                    <div class="wave"></div>

                </div>
            </div>
            </div>
            );
}

            export default Contact;
