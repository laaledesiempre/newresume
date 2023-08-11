import React from 'react'
import { BsStarFill } from 'react-icons/bs'
import "./techs.css"
const TechBall = (props) => {
  let starsArray = []
  for (let i = 0; i < props.stars; i++) { starsArray.push(<BsStarFill key={i} />) }

  return (
    <article>
      <p className="level">{starsArray}</p>
      <h4 className="tech">{props.tech}</h4>
      <p className="description">{props.description}</p>
    </article>
  )
}

export const Techs = () => {
  return (
    <>
      <section className="levels">
        <p><BsStarFill /> Trainee | <BsStarFill /> <BsStarFill /> Experienced | <BsStarFill /><BsStarFill /><BsStarFill /> Mid-level</p>
      </section>
      <section className='technologies'>
        <TechBall stars={3} tech={"Javascript"} description={"M.E.R.N Stack"} />
        <TechBall stars={2} tech={"Python"} description={"Argentina Programa"} />
      </section>
      <section className='technologies'>
        <TechBall stars={2} tech={"Linux"} description={""} />

        <TechBall stars={2} tech={"Docker"} description={"and docker compose"} />
        <TechBall stars={2} tech={"Typescript"} description={""} />
      </section>
      <section className='technologies'>

        <TechBall stars={2} tech={"NGINX"} description={""} />
        <TechBall stars={3} tech={"Photoshop & Illustrator"} description={""} />
        <TechBall stars={1} tech={"C#"} description={"Microsoft Learn"} />
        <TechBall stars={3} tech={"Lua"} description={""} />
      </section>

    </>
  )
}
