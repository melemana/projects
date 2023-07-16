import React from 'react'
import './header.css'
import people from '../../assets/people.png'
// import ai from '../../assets/ai.png'
import ein1 from '../../assets/ein1.png'
import ein2 from '../../assets/ein2.png'
import ein3 from '../../assets/ein3.png'

const Header = () => {
  return (
    <div className='gpt3__header section__padding' id='home'>
      <div className='gpt3__header-content'>

        <h1 className='gradient__text'>
          Let's Learn something Amazing with Melakeselam EdForm
        </h1>
        
        <p>A comprehensive learning platform designed to help you achieve your learning goals and acquire new skills. It offers a wide range of courses and resources to help you succeed. Our platform features courses in a variety of subjects, including business, technology, language, and personal development, taught by experienced instructors from around the world.</p>

        <div className='gpt3__header-content__input'>
          <input type='email' placeholder='Your Email Address' />
          <button type='submit'>Get Started</button>
        </div>

        <div className='gpt3__header-content__people'>
          <img src={people} alt='people' />
          <p>1600 people requested access a visit in last 24 hours</p>
        </div>
      </div>
      <div className='gpt3__header-image'>
        <img src={ein1} alt='ai'/>
      </div>
    </div>
  )
}

export default Header
