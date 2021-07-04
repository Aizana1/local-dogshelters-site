import React from 'react'
import { Header, Navbar, Pets } from '../components'
import FAQ from '../components/FAQ'

function Home() {
  return (
    <div>
      <Header />
      {/* <Navbar  /> */}
      <div class="row">
        <div class="side">
          <h2>О сайте</h2>
          <h5>Photo of me:</h5>
          {/* <div class="fakeimg" style={{height:200}}>Image</div> */}
          <p>
            Сайт, где любители животных найдут любую необходимую информацию.
            Наша главная цель - собрать информацию о всех животных Уфы, которые
            ищут дом.{' '}
          </p>
          <h3>More Text</h3>
          <p>Lorem ipsum dolor sit ame.</p>
        </div>
        <div class="main">
          <FAQ />
        </div>
      </div>
    </div>
  )
}

export default Home
