import React from 'react'

const Contact = () => {
    return (
      <div>
        <p>You can connect with me via the following:</p>
        <ul className='social-links'>
          <li>
            <a href='tel:+447936561301'>
              <p>phone</p>
              <i className='fa fa-phone fa-4x'></i>
            </a>
          </li>
          <li>
            <a href='mailto:me@marksy.com' target='_blank' rel='noopener noreferrer'>
              <p>email</p>
              <i className='fa fa-envelope fa-4x'></i>
            </a>
          </li>
      		<li>
            <a href='https://github.com/marksy' target='_blank' rel='noopener noreferrer'>
              <p>github</p>
              <i className='fa fa-github fa-4x'></i>
            </a>
          </li>
      		<li>
            <a href='https://www.linkedin.com/profile/view?id=AAMAAADE4JIBy_iDM7Qyr0OkeQFVg6Fgk0HD9fg&amp;trk=hp-identity-photo' target='_blank' rel='noopener noreferrer'>
              <p>linkedIn</p>
              <i className='fa fa-linkedin fa-4x'></i>
            </a>
          </li>
      	</ul>
      </div>
    )
}

export default Contact;
