import React from 'react'
import Clinic from './Clinic'

function Clinics({ clinics }) {
   
  return (
    <div>
      <ul>
        <h1>Список ветклиник: </h1>
      </ul>
      <h4>Сортировать по оценкам</h4>

      {clinics.map((element) => (
        <Clinic key={element.name} {...element} />
      ))}
    </div>
  )
}

export default Clinics
