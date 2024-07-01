import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import {ToastContainer,toast} from "react-toastify";
import "react-toastify/ReactToastify.css";

function Contact() {
  const form = useRef();

  const toastOptions = {
    position: "bottom-right",
        autoClose: 3000,
        pauseOnHover: true,
        draggable: true,
        theme: "dark",
  }

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        form.current,
        {
          publicKey: process.env.REACT_APP_PUBLIC_KEY,
        }
      )
      .then(
        () => {
          // console.log("SUCCESS!");
          toast.success("Message sent successfully",toastOptions);
          e.target.reset();
        },
        (error) => {
          // console.log("FAILED...", error.text);
          toast.error("Some error occured",toastOptions);
        }
      );
  };

  return (
    <section className="contact" id="contact">
      <h1>Contact Me</h1>
      <form ref={form} onSubmit={sendEmail}>
        <input required={true} type="text" name="user_name" placeholder="Name" className="feedback-input" />
        <input required={true} type="email" name="user_email" placeholder="Email" className="feedback-input"/>
        <textarea required={true} name="message" placeholder="Message" className="feedback-input"/>
        <input type="submit" value="Send" />
        <ToastContainer/>
      </form>
    </section>
  );
}

export default Contact;
