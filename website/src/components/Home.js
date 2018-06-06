import React from 'react'
import profileImage from '../assets/profile.jpg'

const Home = () => (
  <section className='home'>
    <div className='hero'>
      <p className='noselect'>
        Hullo. My name is Mark Chambers.<br/> I'm a UI Developer in Wellington, NZ.
      </p>
    </div>
	  <div className='profile'>
	  	<img src={profileImage} alt=''/>
	  </div>
  </section>
);

export default Home;
