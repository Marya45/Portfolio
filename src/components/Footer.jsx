import React from "react";

function Footer() {
  return (
    <footer>
      <div className="container">
        <span className="logo">© ROHAN MARYA </span>
        <div className="links">
          <a
            href="https://www.linkedin.com/in/rohan-marya-aa7634229"
            target={"blank"}
            title="LinkedIn"
          >
            <i className="fab fa-linkedin"></i>
          </a>
          <a
            href="https://github.com/Marya45"
            target={"blank"}
            title="Github"
          >
            <i className="fa-brands fa-github"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
