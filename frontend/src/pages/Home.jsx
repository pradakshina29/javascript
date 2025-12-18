import React from 'react'
import Form from '../hooks/Form'
import State from '../hooks/State'
import User from '../components/User'

const Home = () => {
  return (
    <div>  <h1>Home</h1>
    <Form/>
      <State/>
      
      
      <User name="Pradakshina" age="19"/>
      </div>
  )
}

export default Home
