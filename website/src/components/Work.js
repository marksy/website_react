import React from 'react'
import Job from './Job'
import jobs from '../jobs'
import base from '../base'

class Work extends React.Component {
  constructor() {
      super()

      this.loadSamples = this.loadSamples.bind(this);
      this.killSamples = this.killSamples.bind(this);

      this.state = {
        jobs: {}
      }
  }

  componentWillMount() {
    this.ref = base.syncState(`/jobs`,
    {
      context: this,
      state: 'jobs'
    });
  }

  componentWillUnmount() {
    base.removeBinding(this.ref);
  }

  loadSamples() {
    this.setState({
      jobs
    });
  }

  killSamples() {
    this.setState({
      jobs: null
    });
  }

  render() {
    return (
      <div className="work">
        <ul>
        {
          Object
            .keys(this.state.jobs)
            .map(key => <Job key={key} details={this.state.jobs[key]} />).reverse()
        }
        </ul>
        {/*<button onClick={this.loadSamples}>Load Sample</button>
      <button onClick={this.killSamples}>kill Sample</button>*/}
      </div>
    )
  }
}

export default Work;
