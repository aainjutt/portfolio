import React from 'react'
import './Contact.css'
function Contact() {
  return (
    <div className='contact-container'>
      <h3 style={{ marginTop: '50px' }} className='contact'>Get In Touch</h3>
      <div className='paragraph-contact'>
        <p>Although I'm always looking for any new opportunities, my <br />inbox is always open. Whether you have a question or just<br /> want to say hi, I'll try my best to get back to you!

        </p>
        < div style={{ transitionDelay: '500ms', marginTop: '50px' }}>
          <a href="https://mail.google.com/mail/u/0/#inbox" target="_blank" rel="nofollow noopener noreferrer" className="email">Say Hello</a>
        </div>
      </div>
    </div>
  )
}

export default Contact