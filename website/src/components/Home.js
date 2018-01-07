import React from 'react'
import profileImage from '../assets/profile.jpg'
import dealwithit from '../assets/dealwithit.png'

const initialState = {
  mattjamesishere: false,
  name: 'Mark Chambers'
}

let counter = 0

class Home extends React.Component {
  constructor() {
      super()

      this.state = initialState

      this.mattjames = this.mattjames.bind(this)
      this.hideMattjames = this.hideMattjames.bind(this)
  }

  mattjames() {
    counter += 1;
    if (counter === 7) {
      this.setState((prevState) => ({
        mattjamesishere: true,
        name: 'Matt James'

      }));
    }
  }

  hideMattjames() {
    counter = 0;
    this.setState(initialState);
  }

  render() {
    return (
      <section className={this.state.mattjamesishere ? 'mattjamesishere' : ''}>
        <div className='hero'>
          <p className='noselect'>
            Hullo. My name is <span onClick={this.mattjames}>{this.state.name}.</span><br/> I'm a Freelance UI Developer in London.
          </p>
        </div>
    	  <div className='profile'>
    	  	<img src={profileImage} id='profpic' alt=''/>
    		  <img src={dealwithit} onClick={this.hideMattjames} className='dealwithit' alt=''/>
    	  </div>
      </section>
    )
  }
}

export default Home;
