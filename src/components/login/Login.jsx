import React from 'react'
import './login.css'
import IMG from '../../assets/logo.png'

const Login = () => {
  return (
    <section>
      <div className='leftside'>
        <img className='logo' src={IMG} alt="logo" width='250' height='200' />
        <h1>Celebrity moving</h1>
      </div>
      <div className='rightside'>
        <form action="#" method='POST'>
          <h1>Sign in to Celebrity Moving</h1>
          <h5>Email</h5>
          <input type="Email" placeholder='Email' name='email' />
          <h5>Password</h5>
          <div className='forgot'>
          <a href="#">Forgot Password?</a>
          </div>
          <input type="password" placeholder='Password' name='password' />
          <button name='Signin' type='Signin'>Login</button>
        </form>

      </div>

    </section>
   
  )
}

export default Login