import React, { useState } from 'react'
import axios from 'axios';

function AddBtn() {
  // const [name, setName] = useState()
  // const [type, setType] = useState()
  // const [gender, setGender] = useState()
  // const [breed, setBreed] = useState()
  // const [age, setAge] = useState()
  // const [description, setDescription] = useState()
  // const [phone, setPhone] = useState()
  // const [pic, setPic] = useState('')
  // const [filename, setFilename] = useState('Choose file')

  const INITIAL_STATE = {
    name: '',
    type: '',
    gender: '',
    breed: '',
    age: '',
    description: '',
    phone: '',
    picture: '',
  };
  const [newAdd, setNewAdd] = useState(INITIAL_STATE);
  // const {  name,  type,  gender,  breed,  age,  description,  phone,  picture } = formData;

  // const onFileChangeFunc = (e) => {
  // console.log(e.target.files)
  // }

  const handleSubmit = (event) => {
    console.log(event.target.value)
    const formData = new FormData();
    formData.append('name', newAdd.name);
    formData.append('type', newAdd.type);
    formData.append('gender', newAdd.gender);
    formData.append('breed', newAdd.breed);
    formData.append('age', newAdd.age);
    formData.append('description', newAdd.description);
    formData.append('phone', newAdd.phone);
    formData.append('picture', newAdd.picture);


    // const formData = new formData()
    // formData.append('file')
    const postURL = "http://localhost:4000/pets/new"
    axios.post(postURL, formData)
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
    // fetch(postURL, {
    //     method: 'POST',
    //     headers: {
    //         // 'Accept': 'application/json',
    //         'Content-Type': 'multipart/form-data',
    //     },
    //     body: JSON.stringify({ 
    //         name: event.target.name.value,
    //         type: event.target.type.value,
    //         gender: event.target.gender.value,
    //         breed: event.target.breed.value,
    //         age: event.target.age.value,
    //         description: event.target.description.value,
    //         picture: event.target.files[0],
    //         phone: event.target.phone.value,
    //         alt: event.target.name.value,
    //     })
    //})

  }
  const handleChange = (e) => {
     setNewAdd({...newAdd, [e.target.name]: e.target.value, [e.target.type]: e.target.value, 
      [e.target.gender]: e.target.value, [e.target.breed]: e.target.value, 
      [e.target.age]: e.target.value, [e.target.description]: e.target.value,
      [e.target.phone]: e.target.value}
      );
    // console.log(e.target.value)
}

const handlePhoto = (e) => {
  setNewAdd({...newAdd, photo: e.target.files[0]});
}
  return (
    <div className="form newAd">
      <form name="newform" onSubmit={handleSubmit}>
        <input type="text" name="name" required placeholder="Кличка" onChange={handleChange} ></input>
        <select name="type" onChange={handleChange}>
          <option name="cat">Кот</option>
          <option name="dog">Собака</option>
        </select>
        <select name="gender" onChange={handleChange}>
          <option name="male">Мальчик</option>
          <option name="female">Девочка</option>
        </select>
        <input type="text" name="breed" onChange={handleChange} required placeholder="Порода"></input>
        <input type="number" name="age" onChange={handleChange} required placeholder="Возраст"></input>
        <textarea
          type="text"
          name="description"
          required
          onChange={handleChange}
          placeholder="Описание"
        ></textarea>
        <input type="file" name="picture" accept=".png, .jpg, .jpeg"
         onChange={handlePhoto} required></input>
        {/* <FileBase64
        multiple={ false }
        onDone={ ({base64}) => setPic({...pic, picture: base64})} /> */}
        <input
          type="number"
          name="phone"
          required
          placeholder="Ваш номер телефона"
          onChange={handleChange}
        ></input>
        <input className="routeButton" type="submit" value="Добавить" />

      </form>
    </div>
  )
}

export default AddBtn
