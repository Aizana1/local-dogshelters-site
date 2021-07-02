import React from 'react'

function Dashboard() {
const handleAddBtn = () => {
return (
  <form name="newform" >
    <input type= "text" name= "name" required placeholder= "Кличка"></input>
    <select name = "type">
  <option name = "cat">Кошка</option>
  <option name = "dog">Собака</option>
</select>
<select name = "gender">
  <option name = "male">Мальчик</option>
  <option name = "female">Девочка</option>
</select>
    <input type= "text" name= "breed" required placeholder= "Порода"></input>
    <input type= "number" name= "age" required placeholder= "Возраст"></input>
       <textarea type= "text" name= "description" required placeholder= "Описание"></textarea>
       <button>Добавить</button>
</form>
)
}
  return (
    <div className = "profile">
      <h2>Мой профиль</h2>
      <button className="button" onClick={handleAddBtn} >Добавить объявление</button>
      <ul>
        <h2>Мои объявления</h2>
      </ul>
    </div>
  )
}

export default Dashboard
