import React from 'react'
import './possibility.css'
import Course from '../../assets/course.png'


const Possibility = () => {
  return (
    <div className='gpt3__possibility section_paddind' id='possibility'>
      <div className='gpt3__possibility-image'>
        <img src={Course} alt='possibility' />
      </div>
      <div className='gpt3__possibility-content'>
        <h4>Request Early Access To Get Started</h4>
        <h1 className='gradient3__text'>The Possibilies are beyond your imagination</h1>
        <p>an online learning platform is a digital platform that offers educational content and tools to learners over the internet. It provides learners with the flexibility to access educational content from anywhere in the world and at any time, allowing them to fit education into their busy lives. Online learning platforms are characterized by accessibility, interactivity, flexibility, and personalization, offering learners a range of interactive tools, personalized feedback, and support that help to keep them engaged and motivated..</p>
        <h4>Request Early Access To Get Started</h4>
      </div>
    </div>
  )
}

export default Possibility
