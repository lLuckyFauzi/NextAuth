import Link from 'next/link'
import React, { FormEvent, useRef } from 'react'
import { useCreateUser } from '../../mutations/useSignup';

const SignUp = () => {
    const emailInputRef = useRef<HTMLInputElement>(null);
    const passInputRef = useRef<HTMLInputElement>(null);

    const submitCreateUser = async (e: FormEvent) => {
        e.preventDefault();

        const enteredEmail = emailInputRef.current?.value
        const enteredPass = passInputRef.current?.value

        try {
            const results = await useCreateUser(enteredEmail, enteredPass)
            console.log(results);
        } catch (error) {
            console.log(error);
        }
        
    }

  return (
    <div>
        <div>
            <div className='greating'>
                <h1 style={{textAlign: 'center'}}>Sign Up!</h1>
                <p style={{textAlign: 'center'}}>Welcome Back! How’s Your Days? <br /> Please Enter Your Detail.</p>
            </div>
            <div style={{display: 'flex', justifyContent: 'center'}}>
                <form onSubmit={submitCreateUser}>
                    <div>
                        <div>
                            <label style={{ textAlign: 'left'}} htmlFor="email">Email</label>
                        </div>
                        <input type="text" placeholder='Enter Your Email' ref={emailInputRef}/>
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
                        <button>SignUp</button>
                    </div>
                    <div style={{textAlign: 'center'}}>
                        <button>Sign With Google</button>
                    </div>
                    <div style={{textAlign: 'right'}}>
                        <Link style={{textDecoration: 'none'}} href="/login">Already have account?</Link>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default SignUp