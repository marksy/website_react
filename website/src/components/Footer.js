import React from 'react'

const dateYear = new Date().getFullYear();

let day = 0;

function beerOclock(beerDay) {
  const moment = require('moment');
  const runTimestamp = Math.round(Date.now());
  const dayOfWeek = beerDay || 5;
  const date = new Date(runTimestamp);
  const diff = date.getDay() - dayOfWeek;
  if (diff > 0) {
    date.setDate(date.getDate() + 6);
  }
  else if (diff < 0) {
    date.setDate(date.getDate() + ((-1) * diff));
  }
  date.setHours(16);
  date.setMinutes(30);
  date.setSeconds(0);
  return `Beer o'clock  ${moment(date).fromNow()} 🍺`;
}


const initialState = {
  beer: beerOclock()
}

class Footer extends React.Component {
  constructor() {
    super()

    this.state = initialState

  }

  render() {
    return (
      <footer>
  			&copy; {dateYear} marksy.com | <span className="beerLine">{this.state.beer}</span>
  		</footer>
    )
  }
}

export default Footer;
