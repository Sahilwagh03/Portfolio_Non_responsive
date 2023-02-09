import React from 'react'
import Typed from 'react-typed'
export default function InfoMy() {
  
  return (
    <div className='wrapper'>
      <div className="cols cols0">
        <span className="topline">Hello</span>
        <h1>I'm<span className="multiText"><Typed
        strings={[
          "Sahil",
          "Coder",
          "Gamer"
        ]}
        typeSpeed={100}
        backSpeed={80}
        loop
        /></span></h1>
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
