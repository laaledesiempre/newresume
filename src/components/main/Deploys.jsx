import React from 'react'
import './deploys.css'
export const Deploys = () => {
  const deploys = [
    {
      name: "Quote Generator",
      image: "https://github.com/laaledesiempre/newresume/blob/reactVersion/public/Captura%20desde%202023-07-29%2000-13-06.png?raw=true",
      imageResponsive: "https://github.com/laaledesiempre/newresume/blob/reactVersion/public/Captura%20desde%202023-07-29%2000-13-06.png?raw=true",
      link: "https://alesfccphrasegenerator.netlify.app/",
    },
  ]
  return (
    <section className='deploys-wrapper'>
      {deploys.map(e => {
        return <article key={e.name}>
          <h4>{e.name}</h4>
          <img className="desktop-image" src={e.image} />
          <img className="mobile-image" src={e.imageResponsive} />
          {/* todo: make an responsive screenshot for mobile version*/}
          <a href={e.link}>Click to see!</a>
        </article>
      })}
    </section>
  )
}
