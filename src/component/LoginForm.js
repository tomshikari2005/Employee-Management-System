import React from 'react'
import './LoginForm.css'
import bg from './asest/bg.mp4'
import { Link } from 'react-router-dom'



function LoginForm() {
  return (
    <>
    <video id='vid' autoPlay loop muted>
      <source src={bg} type='video/mp4' />
    </video>
    <div className='container'>
      <div className='row'>
        <div className='col-12 col-md-4'></div>
        <div className='col-12 col-md-4'>
          <div className='form'>
          <form>
            <h1>Login Admin</h1>
            <div className='input-box'>
              <input type='email' placeholder='Username' required 
              />
              <i className="bi bi-person-fill icon"></i>
            </div>
            <div className='input-box'>
              <input type='password' placeholder='Password' required 
              />
              <i className="bi bi-shield-lock-fill icon"></i>
            </div>

            <div className="remember-forget">
              <label><input type='checkbox' />Remember me</label>
            </div>
            <Link to={"/home"}>
              <button type='submit'>Login</button>
            </Link>

            <div className="register-link">
              <p>Don't have an account? <a >Contact HR</a> </p>
            </div>
          </form>
          </div>
        </div>
      </div>
    </div>
    </>
  )
// extra

// extra
}

export default LoginForm;