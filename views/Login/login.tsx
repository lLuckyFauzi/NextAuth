import Link from 'next/link'
import React from 'react'

const login = () => {
  return (
    <div>
        <div>
            <div className='greating'>
                <h1 style={{textAlign: 'center'}}>Hello!</h1>
                <p style={{textAlign: 'center'}}>Welcome Back! How’s Your Days? <br /> Please Enter Your Detail.</p>
            </div>
            <div style={{display: 'flex', justifyContent: 'center'}}>
                <form>
                    <div>
                        <div>
                            <label style={{ textAlign: 'left'}} htmlFor="email">Email</label>
                        </div>
                        <input type="text" placeholder='Enter Your Email' />
                    </div>
                    <div>
                        <div>
                            <label style={{ textAlign: 'left'}} htmlFor="password">Password</label>
                        </div>
                        <input type="text" placeholder='Password' />
                    </div>
                    <div style={{textAlign: 'right'}}>
                        <a style={{textDecoration: 'none'}} href="#">Forgot Password?</a>
                    </div>
                    
                    <div style={{textAlign: 'center'}}>
                        <button>Login</button>
                    </div>
                    <div style={{textAlign: 'center'}}>
                        <button>Sign With Google</button>
                    </div>
                    <div style={{textAlign: 'right'}}>
                        <Link style={{textDecoration: 'none'}} href="/signup">Create Account</Link>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default login