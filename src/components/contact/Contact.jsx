import React from "react";
import "./Contact.scss";
import imgFile from "./contact.png";
import ContactForm from "./ContactForm.jsx";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { SiGmail } from "react-icons/si";

function Contact() {
  return (
    <div className="contact__container" id="contact">
      <h1> Contact </h1>
      <div className="contact__items">
        <div className="svgImg">
          <img src={imgFile} alt="" />
        </div>
        <div className="info">
          <ContactForm />
        </div>
      </div>

      <div className="contactLinks">
        <h3>
          <p>Github</p>{" "}
          <a href="https://github.com/galip16" rel="noreferrer" target="_blank">
            <AiFillGithub />
          </a>
        </h3>
        <h3>
          <p>Gmail</p>{" "}
          <a
            href="mailto:galipsvt16@gmail.com"
            rel="noreferrer"
            target="_blank"
          >
            <SiGmail />
          </a>
        </h3>
        <h3>
          <p>Linkedin</p>{" "}
          <a
            href="https://www.linkedin.com/in/galip-savut-7200bb211/"
            rel="noreferrer"
            target="_blank"
          >
            <AiFillLinkedin />
          </a>
        </h3>
      </div>

      <div className="footer" style={{ color: "white" }}>
        <span> &copy; Copyright 2021</span>
        <p> All Right Reserved by GS GmbH</p>
      </div>
    </div>
  );
}

export default Contact;
