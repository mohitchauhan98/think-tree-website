import "./Contact.css";
import { IoMdCall } from "react-icons/io";
import { MdEmail } from "react-icons/md";

const contactData = [
  {
    icon: <IoMdCall />,
    title: "Calling Support",
    info: "+62 8123526512",
  },
  {
    icon: <MdEmail />,
    title: "Email Support",
    info: "support@com.com",
  },
];

const Contact = () => {
  return (
    <>
      <div>
        <div className="contact-box">
          <h4>Contact us</h4>
          <h2>Let's Get In Touch</h2>
          <span>Fill in the form to know more about our services.</span>
        </div>
        <div className="contact-boxes">
          {contactData.map((contact, index) => (
            <div key={index}>
              <div className="border"></div>
              <div className="contact-grid">
                <span>{contact.icon}</span>
                <div className="contact-details">
                  <span>{contact.title}</span>
                  <span>{contact.info}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Contact;
