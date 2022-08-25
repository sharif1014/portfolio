import emailjs from "@emailjs/browser";
import React, { useRef } from "react";
import { FaEnvelope, FaHome, FaPhoneAlt } from "react-icons/fa";
import "./contact.css";

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_34ehh2r",
        "template_rz42jck",
        form.current,
        "z2QDXNJi3RZuUh8w_"
      )
      .then(
        () => {
          alert("message sending");
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <div className="contact">
      <div className="contactContent">
        <h2 className="contactHeading">Contact Me</h2>
        <div className="contactWrapper">
          <div className="contactLeft">
            <h3 className="addressTitle">Physical Address</h3>
            <p className="contactDesc">
              To meet <b>Mr. Sharif</b> physically please visit the address as
              mentioned below......
            </p>
            <br />
            <hr />
            <b>Thanks</b>

            <div className="addressItem">
              <span className="icon">
                <FaHome />
              </span>
              <span className="textDesc">
                <h4 className="house">House</h4>
                <p className="address">
                  Baitul Aman Housing Society Road-13 Muhammadpur,Dhaka.
                </p>
              </span>
            </div>
            <div className="addressItem">
              <span className="icon">
                <FaPhoneAlt />
              </span>
              <span className="textDesc">
                <h4 className="phone">Phone</h4>
                <p className="address">+8801307157848</p>
              </span>
            </div>
            <div className="addressItem">
              <span className="icon">
                <FaEnvelope />
              </span>
              <span className="textDesc">
                <h4 className="email">Email</h4>
                <p className="address">
                  <a
                    href="https://mail.google.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    webdevsharif@gmail.com
                  </a>
                </p>
              </span>
            </div>
          </div>
          <div className="contactRight">
            <form className="contactContainer" ref={form} onSubmit={sendEmail}>
              <h2 className="messageTitle">Send Message</h2>
              <div className="messageItem">
                <label className="messageLabel">Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Mr. Sharif"
                  required
                />
              </div>
              <div className="messageItem">
                <label className="messageLabel">Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="mailexample@gmail.com"
                  required
                />
              </div>
              <div className="messageItem">
                <label className="messageLabel">Subject</label>
                <input
                  type="text"
                  name="subject"
                  placeholder="Type your topic.."
                  required
                />
              </div>
              <div className="messageItem">
                <label className="messageLabel">Your Message</label>
                <textarea
                  name="message"
                  placeholder="Type your message here....."
                  required
                ></textarea>
              </div>
              <button className="sendBtn" type="submit">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
