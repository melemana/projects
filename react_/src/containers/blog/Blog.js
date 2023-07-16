import React from 'react'
import './blog.css'
import {Article} from '../../components'
import { image1, image2, image3, image4, image5 } from './imports'

const Blog = () => {
  return (
    <div className='gpt3__blog section__padding' id='blog'>
      <div className='gpt3__blog-heading'>
        <h1 className='gradient3__text'>
          A Lot is happening, We are blogging about it.
        </h1>
      </div>
      <div className='gpt3__blog-container'>
        <div className='gpt3__blog-container_groupA'>
          <Article imgurl={image1} date="Sep 26, 2021" title="Learn from anywhere in the world, at any time, and at your own pace with EDForm's, certificates, and degrees from top universities and organizations" />
        </div>
        <div className='gpt3__blog-container_groupB'>
          <Article imgurl={image2} date="Sep 26, 2021" title="Learn from anywhere in the world, at any time, and at your own pace with EDForm's, certificates, and degrees from top universities and organizations" />
          <Article imgurl={image3} date="Sep 26, 2021" title="Learn from anywhere in the world, at any time, and at your own pace with EDForm's, certificates, and degrees from top universities and organizations" />
          <Article imgurl={image4} date="Sep 26, 2021" title="Learn from anywhere in the world, at any time, and at your own pace with EDForm's, certificates, and degrees from top universities and organizations" />
          <Article imgurl={image5} date="Sep 26, 2021" title="Learn from anywhere in the world, at any time, and at your own pace with EDForm's, certificates, and degrees from top universities and organizations" />
          
        </div>
      </div>
    </div>
  )
}

export default Blog
