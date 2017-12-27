import React from 'react'

const dateYear = new Date().getFullYear();

const Footer = () => {
    return (
      <footer>
  			&copy; {dateYear} marksy.com
  		</footer>
    )
}

export default Footer;
