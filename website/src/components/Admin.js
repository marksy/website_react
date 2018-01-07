import React from 'react'
import base from '../base'

class Admin extends React.Component {
  constructor() {
    super();

    this.addJob = this.addJob.bind(this);
  }

  state = {
    jobs: {}
  };

  createJob(event) {
    event.preventDefault();
    const job = {
      name: this.name.value,
      date: this.date.value,
      desc: this.desc.value
    }
    this.addJob(job);
    this.jobForm.reset();
  }

  addJob(job) {
    // update our state
    const jobs = {...this.state.jobs};
    // add in our new fish
    const timestamp = Date.now();
    jobs[`${timestamp}`] = job;

    console.log('jobs', jobs);
    // set state
    this.setState({ jobs });
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

  render() {
    return (
      <form ref={(input) => this.jobForm = input} className='form form__add-job' onSubmit={(e) => this.createJob(e)}>
        <h2>Add a new job</h2>
        <ul>
          <li>
            <label htmlFor='jobName' className='label-text'>Job name:</label>
            <input ref={(input) => this.name = input} type='text' id='jobName' className='input-text' />
          </li>
          <li>
            <label htmlFor='jobDuration' className='label-text'>Duration:</label>
          <input ref={(input) => this.date = input} type='text' id='jobDuration' className='input-text'/>
          </li>
          <li>
            <label htmlFor='jobDescription' className='label-text'>Description:</label>
          <textarea ref={(input) => this.desc = input} name='jobDescription' id='jobDescription' cols='30' rows='10' className='input-text'></textarea>
          </li>
          <li>
            <button type="submit" className='btn btn__save'>Save</button>
          </li>
        </ul>
      </form>
    )
  }
}

export default Admin;
