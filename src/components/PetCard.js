import React from 'react'

function PetCard({name,image, age, alt, type,gender, description}) {
  return (
   <div className="column">
    <div className="card" >
      <h2>{name}</h2>
      <img src={image} alt={alt} style={{width:200}}/>
      <div className="container">
        <p className="title">{type}</p>
        <p className="title">{gender}</p>
        <p>{description}</p>
        <a className="card button" href='/'>Связаться с куратором</a>
      </div>
    </div>
   </div>

  )
}

export default PetCard
