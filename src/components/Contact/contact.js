import React, { useRef } from 'react';
import './contact.css';
// import github from  '../../assets/github.png';
// import linkedin from  '../../assets/linkedin.png';
// import email from  '../../assets/email.png';
import emailjs from '@emailjs/browser';


const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_hsiq2mn', 'template_g1a2oco', form.current, {  publicKey: 'Z4Cqvc2D8Qc57jyXU',})
      .then(() => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <section id='contact'>

        <div className='contactContent'>

            <h1 className='contactPage'>CONTACT</h1>
            <span className='contactDisc'>Please fill out the form below to discuss any work opportunities.</span>
            <p className='contactEmail'><span>Email : </span>santhoshbenhur777@gmail.com</p>
            <p className='contactPhone'><span>Phone : </span> 9962337562</p>

            <form className='contactForm' ref={form} onSubmit={sendEmail}>
                <input type='text' className='name' placeholder='Your Name' name='Your_name'/>
                <input type='text' className='email' placeholder='Your Email' name='user_email'/>
                <textarea className='msg' rows='5' placeholder='Your Message' name='user_meassage'></textarea>
                <button type='submit' value='send' className='submitBtn'>Submit</button>
                {/* <div className='links'>
                    <img  src={github} alt='github' className='link'/>
                    <img src={linkedin} alt='linkedin' className='link'/>
                    <img src={email} alt='email' className='link'/>
                </div> */}
            </form>
            
        </div>

        
    </section>
  );
}

export default Contact