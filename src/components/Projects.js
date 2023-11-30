import React from 'react'
import './Projects.css';
import data from './Data';
function Projects() {
    return (
        <div className='projects-container'>
            <h3 style={{ marginTop: '50px' }} className='projects'>Projects</h3>
            <div className="Card">
                {data.map((item, index) => (
                    <div key={index} className="card-container">
                        <img className="img" src={item.icon} alt={`Image ${index}`} />
                        <div className="text-div">
                            <h4> Project :{item.Project}</h4>
                            <h4> Item :{item.Text}</h4>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Projects