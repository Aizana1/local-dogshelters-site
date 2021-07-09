import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { PetCard } from '../components'
import AddBtn from './AddBtn'

const Input = () => {
  return <AddBtn />
}

function PetsList() {
  const [petsToDisplay, setPetsToDisplay] = useState()
  const dispatch = useDispatch()
  const pets = useSelector((state) => state.pets)
  const username = useSelector((state) => state.username)

  const [inputList, setInputList] = useState([])

  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:4000/pets')
      const result = await response.json()
    //  console.log(result)
      dispatch({ type: 'INIT_PETS', payload: result })
      // непосредственное обновление состояния при условии, что компонент не размонтирован
      // if (!cleanupFunction) dispatch({ type: 'INIT_PETS', payload: result });
    } catch (e) {
      console.error(e.message)
    }
  }

  useEffect(() => {
    let cleanupFunction = false
    fetchData()
    return () => {
      cleanupFunction = true
    }
  }, [])

  useEffect(() => {
    if (!pets || pets.length === 0) fetchData()
  }, [pets])

  const onAddBtnClick = (event) => {
    setInputList(inputList.concat(<Input key={inputList.length} />))
  }

  const filterFunc = (type) => {
    setPetsToDisplay(pets.filter((el) => el.type === type))
  }

  return (
    <>
      <div id="myBtnContainer">
        <button className="btn" onClick={() => filterFunc('Собака')}>
          Собаки
        </button>
        <button className="btn" onClick={() => filterFunc('Кот')}>
          Коты
        </button>
      </div>
      {/* <Filter /> */}
      {username 
      ? <button
        style={{ backgroundColor: '##000' }}
        className="btn newAd"
        onClick={onAddBtnClick}
      >
        Добавить новое объявление
      </button>
      : 'Если вы хотите добавить объявление, пожалуйста, авторизуйтесь'}

      <div> {inputList}</div>
      <div className="petsList">
      {petsToDisplay 
          ? petsToDisplay.map((obj) => <PetCard key={obj.name} {...obj} />)
          : pets.map((obj) => <PetCard key={obj.name} {...obj} />)}
        
      </div>
    </>
  )
}

export default PetsList
