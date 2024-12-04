import React from 'react'
import './Hero.css'
import dark_arrow from '../../assets/dark-arrow.png'

const Hero = () => {
  return (
    <div className='hero contianer'>
      <div className='heroText'>
        <h1>
            WELCOME TO YOUR FUTURE
        </h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque tenetur sed voluptatum necessitatibus recusandae! Cumque qui repudiandae nam eos modi. Inventore vel hic facilis provident rerum dolor aspernatur officiis! Deserunt!</p>
        <button className='btn'>Explore more <img src={dark_arrow} alt="" /></button>
      </div>
    </div>
  )
}

export default Hero
