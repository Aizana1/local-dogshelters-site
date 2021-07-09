import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import logoSvg from '../assets/img/house.svg'
import { useDispatch, useSelector } from 'react-redux'

function Navbar() {
  const dispatch = useDispatch()
  const history = useHistory()

  const user = useSelector((state) => state.user)
console.log(user)
  // console.log(user)
  const logoutHandler = async () => {
    await fetch(`http://localhost:4000/login`, {
      method: 'delete',
      credentials: 'include',
      headers: { 'Content-Type': 'application/json' },
    })
    history.push('/')
console.log(user)
  }
  return (
    <div className="navbar">
      <Link to="/">
        <i className="fa fa-home"></i>
      </Link>
      <Link to="/pets">Найти себе питомца</Link>
      <Link to="/lostandfound">Потеряшки</Link>

      {/* <Link to="/homestay">Найти передержку</Link>
      <Link to="/vetclinics">Найти ветклинику</Link> */}
      <Link to="/places">Dog-friendly места</Link>
      <Link to="/help" style={{ fontWeight: 'bolder', fontSize: 20 }}>
        Как можно помочь приютам?
      </Link>
      {!user ? (
        <>
          <Link to="/login" className="right">
            Логин
          </Link>
          <Link to="/signup" className="right">
            Регистрация
          </Link>
        </>
      ) : (
        <>
          <Link to="/dashboard">Это твой профиль, {user}</Link>
          <Link to="/logout" onClick={logoutHandler} className="right">
            LOG OUT
          </Link>
        </>
      )}
    </div>
  )
}

export default Navbar
