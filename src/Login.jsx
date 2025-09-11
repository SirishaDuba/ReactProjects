import React, { Component } from 'react'
import './css/Login.css'

export default class Login extends Component {
  render() {
    return (
        
      <div className='login'>
        <div className='leftPanel'>
            <h2> Welcome to S201 ERP Project</h2>
            <p>Check all the ERP options here</p>

        </div>
        <div className='rightPanel'>
            <div className='card'>
                <input type='text' placeholder='Enter the Email'></input>
                <br></br><br></br>
                <input type='password' placeholder='Enter the Password'></input>
                <br></br><br></br>
                <button>Login</button>
                <p>Don't have an account? <span>Sign Up</span></p>
            </div>

        </div>
      </div>
    )
  }
}
