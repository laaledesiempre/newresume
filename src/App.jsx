import './App.css'
import { Deploys, Header, Resume } from "./components/index.jsx"

function App() {

  return (
    <>
      <div className='image-wrapper'>
        <img src="https://github.com/laaledesiempre/newresume/blob/main/stars.png?raw=true" alt="Little stars at a background" />
      </div>
      <Header />
      <Resume />
      <Deploys />
    </>
  )
}

export default App
