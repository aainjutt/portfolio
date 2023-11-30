import React from 'react'
import './About.css';
import aain from '../assets/aain.JPG'
function About() {
    return (
        <div className='about-container'>
            <h3 style={{ marginTop: '50px' }} className='about'>About Me</h3>
            <div className='paragraph-container'>
                <p className='paragraph-2'>I am a frontend developer with strong background  in React and JavaScript.<br /> I possess in-depth expertise in web technologies, including HTML5, CSS3, and JavaScript .I frequently utilize libraries in my code, and I am proficient in Ant Design and Bootstrap. I have been working in this field for 2 years. Additionally, I have experience in working with REST APIs and frequently employ the React library for website development.<br /> My specialization lies in web design, with a focus on crafting responsive designs that adapt to diverse screen sizes and resolutions.<br />Here are few technologies I have been working there.</p>
                <ul className='list'>
                    <li className='items'>HTML3 and HTML5</li>
                    <li className='items'>CSS3 and CSS5</li>
                    <li className='items'>JavaScript</li>
                    <li className='items'>React.Js</li>
                    <li className='items'>Redux.Js</li>
                    <li className='items'>GitHub</li>
                    <li className='items'>Ant Design</li>
                    <li className='items'>Bootstrap</li>
                    <li className='items'>Redux Toolkit</li>
                    <li className='items'> Material UI</li>

                </ul>
            </div>
            <div title="Aain ur rehman" className="cqDPIl">
                <div className="fCkJVF">
                    <div>
                        <img src={aain} alt="" className="sc-fzolEj jJAzoG" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About