import React from 'react'
import './style.scss'

function FooterComponents() {
  return (
    <div className='footer-main'>
      <div className='footer-ul'> 
      <ul>
        <li><a>ABOUT ROG</a> </li>
        <li><a>HOME</a> </li>
        <li><a>NEWSROOM</a> </li>
        <li><a>ACCESSIBLITY HELP</a></li>
      </ul>
      </div>
      <div className='social'>
      <i class="fa-brands fa-facebook"></i>
      <i class="fa-brands fa-twitter"></i>
      <i class="fa-brands fa-discord"></i>
      <i class="fa-brands fa-youtube"></i>
      <i class="fa-brands fa-twitch"></i>
      <i class="fa-brands fa-instagram"></i>

      </div>
    </div>
  )
}

export default FooterComponents