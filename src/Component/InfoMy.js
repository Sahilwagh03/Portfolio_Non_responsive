import React from 'react'
import {useTypewriter,Cursor} from 'react-simple-typewriter'
export default function InfoMy() {
  const {text} = useTypewriter({
    words: ['Sahil', 'Coder','Gamer'],
    loop: {},
    typeSpeed:80,
    delaySpeed:50
  });
  return (
    <div className='wrapper'>
      <div className="cols cols0">
        <span className="topline">Hello</span>
        <h1>I'm<span className="multiText">
          {text}
          </span></h1>
        <p>I am constantly looking for ways to improve my skills and stay
						up-to-date with the latest developments in the field. Overall, I am confident in my
						ability to write efficient and effective code for a wide range of projects.
						I have experience working with a HTML, CSS, JavaScript
</p>
        <div className="btn">
          <button>Download CV</button>
          <button>Hire me</button>
        </div>
        </div>
        <div className="cols cols1">
          <div className="imgbox">
            <img src="" alt="" id="splash" />
            <img src="https://files.codingninjas.in/laptop-coffee-17904.svg" />
          </div>
        </div>
    </div>
  )
}
