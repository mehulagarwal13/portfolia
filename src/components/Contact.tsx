import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Connect</h4>
            <p>
              <a
                href="https://www.linkedin.com/in/mehul-agarwal-49ba18260/"
                target="_blank"
                rel="noreferrer"
                data-cursor="disable"
              >
                LinkedIn — mehul-agarwal
              </a>
            </p>
            <p>
              <a
                href="mailto:mehulagarwal1313@gmail.com"
                data-cursor="disable"
              >
                mehulagarwal1313@gmail.com
              </a>
            </p>
            <p>+91 8979011405</p>
            <h4>Education</h4>
            <p>
              B.Tech Computer Science, Jaypee Institute of Information
              Technology, Noida — 2022–2026 (CGPA: 8.2)
            </p>
          </div>
          <div className="contact-box">
            <h4>Social</h4>
            <a
              href="https://github.com/mehulagarwal1313"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              GitHub <MdArrowOutward />
            </a>
            <a
              href="https://www.linkedin.com/in/mehul-agarwal-49ba18260/"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              LinkedIn <MdArrowOutward />
            </a>
            <a
              href="https://leetcode.com/u/pikachu___13/"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              LeetCode <MdArrowOutward />
            </a>
          </div>
          <div className="contact-box">
            <h2>
              Designed and Developed <br /> by <span>Mehul Agarwal</span>
            </h2>
            <h5>
              <MdCopyright /> 2026
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
