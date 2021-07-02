import React from 'react'
import { Header, Navbar, Pets } from '../components'

function Home() {
  return (
    <div>
      <Header />
      {/* <Navbar  /> */}
      <div class="side">
        <h2>Про нас</h2>
        {/* <h5>Photo of me:</h5> */}
        <p>Сайт, где мы попытались собрать всю необходимую информацию о животных, которым нужен дом, и информацию для владельцев животных.</p>
      </div>
    </div>
  )
}

export default Home
