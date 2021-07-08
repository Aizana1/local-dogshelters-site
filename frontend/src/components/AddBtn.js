import React, { useState } from 'react'

function AddBtn() {
  var [name, setName] = useState()
  var [type, setType] = useState()
  var [gender, setGender] = useState()
  var [breed, setBreed] = useState()
  var [age, setAge] = useState()
  var [description, setDescription] = useState()
  var [phone, setPhone] = useState()

      const handleSubmit=(event)=> { 
      const postURL = "http://localhost:4000/new" 
      fetch(postURL, {
          method: 'POST',
          headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
          },
          body: JSON.stringify({ 
              name: event.target.name.value,
              type: event.target.type.value,
              gender: event.target.gender.value,
              breed: event.target.breed.value,
              age: event.target.age.value,
              description: event.target.description.value,
              phone: event.target.phone.value,
              alt: event.target.name.value,
          })
      })
      .then(()=>{
          alert('Добавлено!');
      })
    }
  return (
    <div className="form newAd">
      <form name="newform" onSubmit={handleSubmit}>
        <input type="text" name="name" required placeholder="Кличка"></input>
        <select name="type">
          <option name="cat">Кот</option>
          <option name="dog">Собака</option>
        </select>
        <select name="gender">
          <option name="male">Мальчик</option>
          <option name="female">Девочка</option>
        </select>
        <input type="text" name="breed" required placeholder="Порода"></input>
        <input type="number" name="age" required placeholder="Возраст"></input>
        <textarea
          type="text"
          name="description"
          required
          placeholder="Описание"
        ></textarea>
        <input
          type="number"
          name="phone"
          required
          placeholder="Ваш номер телефона"
        ></input>
        <input className="routeButton" type="submit" value="Добавить" />
      </form>
    </div>
  )
}

export default AddBtn
