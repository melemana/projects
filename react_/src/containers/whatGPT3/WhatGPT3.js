import React from 'react'
import './whatGPT3.css'
import {Feature} from '../../components'

const WhatGPT3 = () => {
  return (
    <div className='gpt3__whatgpt3 section__margin' id='wgpt3'>
      <div className='gpt3__whatgpt3-feature'>
        <Feature title='What is EDForm' text='EDForm is an online learning platform founded in 2012 that offers courses, certificates, and degrees from top universities and organizations around the world. It partners with more than 200 leading universities and institutions to provide online courses in various subjects, including computer science, business, humanities, social sciences, and more.Through EDForm, learners can access interactive video lectures, assignments, quizzes, and discussion forums, and receive feedback and grades from instructors or peers.'/>
      </div> 
      <div className='gpt3__whatgpt3-heading'>
        <h1 className='gradient2__text'>
          The possibilities are beyond your imagination
        </h1>
        <p>Explore The Library</p>
      </div>
      <div className='gpt3__whatgpt3-container'>
        <Feature title='Chatbots' text='Its chatbot enhance the learning experience. For example, some courses in the field of computer science use it as a teaching tool to help learners understand more.' />
        <Feature title='Knowledgebase' text='Does not have a traditional "knowledgebase" in the way that a database or knowledge graph would store structured information. Instead, trained language model'  />
        <Feature title='Education' text='It has the potential to be a powerful tool for education, with a wide range of possible applications in the classroom and beyond.'  />
      </div>
    </div>
  )
}

export default WhatGPT3

