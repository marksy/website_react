import React from 'react'

class Job extends React.Component {
  render() {
    return (
      <li>
        <h2>{this.props.details.name}</h2>
        <p className='date'>{this.props.details.date}</p>
        {/*}<p className='desc'>{this.props.details.desc}</p>*/}
      </li>
    )
  }
}

export default Job;
