import React from 'react'
import { Link } from 'react-router-dom'
import logoSvg from '../assets/img/house.svg'

function Navbar() {
  return (
    <div className="navbar">
      <Link to="/"><i class="fa fa-home"></i></Link>
      <Link to="/pets">Найти себе питомца</Link>
      <Link to="/homestay">Найти передержку</Link>
      <Link to="/vetclinics">Найти ветклинику</Link>
      <Link to="/places">Dog-friendly места</Link>
      <Link to="/help" style= {{fontWeight: 'bolder', fontSize: 20}}>Как можно помочь приютам?</Link>

      <Link to="/login" className="right">
        Логин
      </Link>
      <Link to="/signup" className="right">
        Регистрация
      </Link>
    </div>
  )
}

export default Navbar
