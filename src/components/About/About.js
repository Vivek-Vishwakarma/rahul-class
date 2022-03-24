import React from 'react'
import Button from '../Button/Button'
import Title from '../Title/Title'
import "./about.css"
const About = () => {
  return (
    <section className='aboutSection'>
        <Title title="About" />
        <div className="aboutFlex">
        <img className='aboutImg' src="https://img.icons8.com/pastel-glyph/250/000000/classroom.png" alt="classroom"/>
        <p className='pTag'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius sequi provident, porro quas, adipisci nobis placeat dolorum tempora nostrum ullam aliquam sit voluptas mollitia blanditiis animi maiores vitae ipsum libero! Eveniet quibusdam nesciunt deserunt modi, ratione veniam sequi ducimus veritatis eligendi dolor dicta magnam sint doloremque in quo expedita animi praesentium. <br /> <br />
        <Button text="Explore more" />
        </p>
        </div>
    </section>
  )
}

export default About