import React from 'react'
import './Section.css'
function Section() {
  return (
    <main className='main-container'>
      <div className='Section-container'>
        <div className='text-container'>
          <span className='text'>Hi,   I   am </span>
          <h1 className='text-2'>Aain Ur Rehman.</h1>
          <h1 className='text-3'>I build things for web. </h1>
          <p className='paragraph'>I am a software engineer residing in Faisalabad,<br /> specializing in frontend development using React.</p>
          <div style={{ transitionDelay: '500ms', marginTop: '50px' }}>
            <a href="aain134@gmail.com" className="email">Get In Touch</a></div>
        </div>

      </div>
    </main>

  )
}

export default Section