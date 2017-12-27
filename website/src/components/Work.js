import React from 'react'
import Job from './Job'
import jobs from './jobs'

class Work extends React.Component {
  constructor() {
      super()

      this.state = {
        jobs
      }
  }

  render() {
    return (
      <div className="work">
        <ul>
        {
          Object
            .keys(this.state.jobs)
            .map(key => <Job key={key} details={this.state.jobs[key]} />)
        }
        </ul>
      </div>
    )
  }
}

export default Work;
