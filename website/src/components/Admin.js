import React from 'react'

const Admin = () => {
    return (
      <form className='form form__add-job'>
        <h2>Add a new job</h2>
        <ul>
          <li>
            <label htmlFor='jobName' className='label-text'>Job name:</label>
            <input type='text' id='jobName' className='input-text' />
          </li>
          <li>
            <label htmlFor='jobDuration' className='label-text'>Duration:</label>
            <input type='text' id='jobDuration' className='input-text'/>
          </li>
          <li>
            <label htmlFor='jobDescription' className='label-text'>Description:</label>
            <textarea name='jobDescription' id='jobDescription' cols='30' rows='10' className='input-text'></textarea>
          </li>
          <li>
            <button type="submit" className='btn btn__save'>Save</button>
          </li>
        </ul>
      </form>
    )
}

export default Admin;
