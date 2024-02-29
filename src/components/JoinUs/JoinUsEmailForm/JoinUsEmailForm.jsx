import { useRef } from 'react';
import emailjs from '@emailjs/browser';

import './JoinUsEmailForm.css';

const JoinUsEmailForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_orjpe6c', 'template_i6hp39l', form.current, '-TE8CzFg3ijxh79IZ')
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <form
      ref={form}
      action=""
      className="email-container"
      onSubmit={sendEmail}
    >
      <input type="email" name='user_email' placeholder='Enter your Email address' />
      <button className='btn btn-j'>Join Now</button>
    </form>
  )
}

export default JoinUsEmailForm;