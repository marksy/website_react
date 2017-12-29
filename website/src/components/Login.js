import React from 'react'

const Login = () => {
    return (
      <form className='form form__login'>
        <ul>
          <li>
            <label htmlFor='username' className='label-text'>Username:</label>
            <input type='text' rel='username' id='username' className='input-text' />
          </li>
          <li>
            <label htmlFor='password' className='label-text'>Password:</label>
            <input type='password' rel='password' id='password' className='input-text' />
          </li>
          <li>
            <button type='submit' className='btn btn__login'>
              login
            </button>
          </li>
        </ul>
        <p className='validation__error'>Wrong username or password</p>
      </form>
    )
}

export default Login;
