import React from 'react'
import { BsGithub, BsFillEnvelopeAtFill } from "react-icons/bs";
import "./header.css"

export const Header = () => {
  return (<>

    <header>
      <h1>Fer "Ale" Pajón</h1>
    </header>
    <nav>
      <a href="mailto:alejandrabotacura@outlook.com.ar"><BsFillEnvelopeAtFill /> </a>
      <a href="https://github.com/laaledesiempre"> <BsGithub /></a>
    </nav>

  </>
  )
}
