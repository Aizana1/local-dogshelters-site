import React from 'react'

function Lost() {
  return (
    <div className="form newAd">
      <div id="myBtnContainer">
        <button className="btn" >
          Найдены
        </button>
        <button className="btn" >
          Потерялись
        </button>
        <p>Если вы нашли или потеряли питомца, добавьте объявление</p>
        
        <form name="newform" style={{width: 500}}>
        <select name="type">
          <option name="cat">Кот</option>
          <option name="dog">Собака</option>
        </select>
        <select name="gender">
          <option name="male">Мальчик</option>
          <option name="female">Девочка</option>
        </select>
        <input type="text" name="location" required placeholder="Где нашли или потеряли"></input>
        <input type="number" name="age" placeholder="Возраст"></input>
        <textarea
          type="text"
          name="description"
          required
          placeholder="Описание"
        ></textarea>
        <input type="file" name="picture" required></input>
        {/* <FileBase64
        multiple={ false }
        onDone={ ({base64}) => setPic({...pic, picture: base64})} /> */}
        <input
          type="number"
          name="phone"
          required
          placeholder="Ваш номер телефона"
        ></input>
        <input className="routeButton" type="submit" value="Добавить" />

      </form>
      </div>
    </div>
  )
}

export default Lost
