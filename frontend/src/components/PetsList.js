import React, { useState, useEffect } from 'react'
import { PetCard } from '../components'
import Filter from "./Filter"

function PetsList() {
  let [pets, setPets] = useState([])

  useEffect(() => {
    let cleanupFunction = false
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:4000/pets')
        const result = await response.json()

        // непосредственное обновление состояния при условии, что компонент не размонтирован
        if (!cleanupFunction) setPets(result)
      } catch (e) {
        console.error(e.message)
      }
    }

    fetchData()
    return () => {
      cleanupFunction = true
    }
  }, [])
const filterSelection = (type) => {
if (type === 'Собака') {
  return pets.map((el) => el.type === 'Собака')
} 
}
  return (
    <>
    <div id="myBtnContainer">
  {/* <button class="btn active" onclick="filterSelection('all')">Все</button> */}
  <button className="btn" onClick={() => filterSelection('Собака')}> Собаки</button>
  <button className="btn" onClick={() => filterSelection('Кот')}>Коты</button>
</div>
    {/* <Filter /> */}
    <div className="petsList">
      {pets.map((obj) => (
        <PetCard key={obj.name} {...obj} />
      ))}
    </div>
    </>
  )
}

export default PetsList
