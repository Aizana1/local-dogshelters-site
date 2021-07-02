import React from 'react'
import Homestay from './Homestay'
function Homestays({homestays}) {
  return (
    <div>
     <ul> <h1>Список передержек: </h1></ul>
<h4>Сортировать по оценкам</h4>
{homestays.map((element) => 
<Homestay key={element.name} {...element}/>)}

    </div>
  )
}

export default Homestays
