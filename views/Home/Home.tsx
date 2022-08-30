import { getSession, signOut } from 'next-auth/client'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'

const Home = () => {
  const router = useRouter()
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getSession().then((session) => {
      if(!session) {
        router.push('/')
      } else {
        setIsLogin(true)
        setLoading(false)
      }
    })
  }, [])

  const logoutHandler = () => {
    signOut()
  }

  if(loading) {
    return (
      <p style={
        { textAlign: 'center' }
    }>Loading...</p>
    )
  }

  return (
    <div>
        <h1 style={
            { textAlign: 'center' }
        }>Welcome</h1>
        <div style={
            { textAlign: 'center' }
        }>
          <button onClick={()=> {
            logoutHandler()
            router.push('/')
          }}>Logout</button>
        </div>
    </div>
  )
}

export default Home