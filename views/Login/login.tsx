import Link from 'next/link'
import React, { FormEvent, useRef } from 'react'
import { signIn } from 'next-auth/client'
import { useRouter } from 'next/router'

const login = () => {
    const router = useRouter()
    const emailInputRef = useRef<HTMLInputElement>(null);
    const passInputRef = useRef<HTMLInputElement>(null);

    const onLoginSubmit = async (e: FormEvent) => {
        e.preventDefault()

        const emailValue = emailInputRef?.current?.value
        const passValue = passInputRef?.current?.value

        const results = await signIn('credentials', {
            redirect: false,
            email: emailValue,
            password: passValue
        })

        if(!results?.error) {
            router.push('/home')
        }
        
    }

  return (
    <div>
        <div>
            <div className='greating'>
                <h1 style={{textAlign: 'center'}}>Hello!</h1>
                <p style={{textAlign: 'center'}}>Welcome Back! How’s Your Days? <br /> Please Enter Your Detail.</p>
            </div>
            <div style={{display: 'flex', justifyContent: 'center'}}>
                <form onSubmit={onLoginSubmit}>
                    <div>
                        <div>
                            <label style={{ textAlign: 'left'}} htmlFor="email">Email</label>
                        </div>
                        <input type="text" placeholder='Enter Your Email' ref={emailInputRef} />
                    </div>
                    <div>
                        <div>
                            <label style={{ textAlign: 'left'}} htmlFor="password">Password</label>
                        </div>
                        <input type="text" placeholder='Password' ref={passInputRef} />
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
                        <Link style={{textDecoration: 'none'}} href="/">Create Account</Link>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default login