import React from 'react'
import { VscCode } from "react-icons/vsc";
import './deploys.css'
export const Deploys = () => {
  const deploys = [
    {
      name: "Quote Generator",
      image: "https://github.com/laaledesiempre/newresume/blob/reactVersion/public/Captura%20desde%202023-07-29%2000-13-06.png?raw=true",
      imageResponsive: "https://github.com/laaledesiempre/newresume/blob/reactVersion/public/Captura%20desde%202023-07-29%2001-09-47.png?raw=true",
      link: "https://alesfccphrasegenerator.netlify.app/",
    }, {
      name: "PoMoDoRo",
      image: "https://github.com/laaledesiempre/newresume/blob/reactVersion/public/Captura%20desde%202023-07-31%2023-55-01.png?raw=true",
      imageResponsive: "https://github.com/laaledesiempre/newresume/blob/reactVersion/public/Captura%20desde%202023-07-31%2023-34-59.png?raw=true",
      link: "https://laaledesiempre.github.io/FCCPoMoDoRo/",
    }, {
      name: "DrumPad",
      image: "https://github.com/laaledesiempre/newresume/blob/reactVersion/public/Captura%20desde%202023-07-31%2023-55-07.png?raw=true",
      imageResponsive: "https://github.com/laaledesiempre/newresume/blob/reactVersion/public/Captura%20desde%202023-07-31%2023-35-19.png?raw=true",
      link: "https://laaledesiempre.github.io/FCCdrumbmachine/",
    }, {
      name: "Markdown Parser",
      image: "https://github.com/laaledesiempre/newresume/blob/reactVersion/public/Captura%20desde%202023-07-29%2000-11-37.png?raw=true",
      imageResponsive: "https://github.com/laaledesiempre/newresume/blob/reactVersion/public/Captura%20desde%202023-07-31%2023-37-13.png?raw=true",
      link: "https://laaledesiempre.github.io/markdown/",
    }, {
      name: "Practical work for UTN diplomacy",
      image: "https://github.com/laaledesiempre/newresume/blob/reactVersion/public/Captura%20desde%202023-07-29%2000-11-33.png?raw=true",
      imageResponsive: "https://github.com/laaledesiempre/newresume/blob/reactVersion/public/Captura%20desde%202023-07-31%2023-36-10.png?raw=true",
      link: "https://laaledesiempre.github.io/Trabajo_UTN_Front/",
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
          <a target="_blank" href={e.link}>Click to see!</a>
          <span>~<VscCode />~</span>
        </article>
      })}
    </section>
  )
}
