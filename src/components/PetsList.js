import React from 'react'
import {PetCard} from '../components'

function PetsList({pets}) {
  return (
    <div className='petsList'>
     {pets.map((obj) => 
      // console.log(obj)
      <PetCard key = {obj.name} {...obj}/>
      )}
    </div>
  )
}

export default PetsList
