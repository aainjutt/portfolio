import React from 'react'
import './Footer.css'
import {
WhatsAppOutlined ,
TwitterOutlined,
LinkedinOutlined,
FacebookOutlined,
InstagramOutlined,
GithubOutlined
}from '@ant-design/icons'
function Footer() {
  return (
    <div className='Footer-container'>
<div className='icon-container'>
    
<TwitterOutlined  className='tiwitter'/>
<WhatsAppOutlined className='watsapp' />
<LinkedinOutlined className='linkedin' />
<FacebookOutlined className='facebook' />
<InstagramOutlined className='instagram'/>
<GithubOutlined  className = 'github'/>
</div>
<div className='text-footer'>
<p>Developed By Aain Ur Rehman 2023 © Faisalabad, PK</p>
</div>
    </div>
  )
}

export default Footer