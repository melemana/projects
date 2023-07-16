import React from 'react'
import './features.css'
import { Feature } from '../../components'


const featureData = [
  {
    title: 'Accessibility',
    text: 'One of the key characteristics of an online learning platform is accessibility. Online learning platforms make it possible for learners to access educational content from anywhere in the world.'
  },
  {
    title: 'Interactivity',
    text: 'Another important characteristic of online learning platforms is interactivity. Online learning platforms provide a range of interactive tools that help learners engage with the content and with each other.'
  },
  {
    title: 'Flexibility',
    text: 'Online learning platforms also offer learners a high degree of flexibility. Learners can choose from a wide range of courses and programs, and can often tailor their learning experience to their own interests and goals.'
  },
  {
    title: 'Personalization',
    text: ' online learning platforms offer learners a high degree of personalization. Learners can choose the courses and programs that best meet their needs, and can often customize their learning experience to their own interests and goals.'
  }
]

const Features = () => {
  return (
    <div className='gpt3__features section__padding' id='features' > 
      <div className='gpt3__features-heading'>
        <h1 className='gradient3__text'>
          The Future is Now and You Just Need To Realize it. Step into Future Today & Make it Happen.
        </h1>
        <p>Request Early Access To Get Started</p>
      </div>
      <div className='gpt3__features-container'>
        {
          featureData.map((item, index) => (
            <Feature title={item.title} text={item.text} key={item.title + index} />
          )) 
        }
      </div>
    </div>
  )
}

export default Features
