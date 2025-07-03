import './Footer.scss';
import { HiOutlineMail, HiOutlinePhone } from 'react-icons/hi';

export const Footer = () => {
  return (
    <>
      <div className="contact-wrapper">
        <h5 className="form">How to reach me!</h5>

        <div id='contact-section' className="contact-footer">
          <a className="contact-form" href="mailto:sarah.sundberg@outlook.com">
            <HiOutlineMail size={24} />
            <span className="contact-spec">sarah.sundberg@outlook.com</span>
          </a>

          <a className="contact-form" href="tel:+46735669434">
            <HiOutlinePhone size={24} />
            <span className="contact-spec">073 566 94 34</span>
          </a>
        </div>
      </div>
    </>
  );
};
