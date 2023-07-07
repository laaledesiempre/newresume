import React from 'react'
import "./resume.css"
import { Techs } from '../index.jsx'

export const Resume = () => {
  return (
    <>
      <section>
        <h6>I am a sensitive and thoughtful person who always looks for a reason to make everything better for everyone.</h6>
        <h6>I want to make a career in a company where my work can help costumers, and lead my co-workers to be the best they can ever be.</h6>
      </section>
      <section>
        <article>
          <h5>Personal Goals</h5>
          <p>I am interested about every day's progress, Developing myself in my workspace based on good performance, attitude, and integration with colleagues.</p>
        </article>
        <article>
          <h5>My performance</h5>
          <p>I am active and organized, I used to look for solutions and always prioritize objetives above anything else. What I enjoy the most is coworking, and sharing knowledge acquired through experience.</p>
        </article>
        <article>
          <h5>What i'm looking for...</h5>
          <p>A work where i will be constantly learning, developing projects that require creativity in solving problems, improving my skills every day, somewhere i can be proud of working at.</p>
        </article>
      </section>
      <Techs />
    </>
  )
}
