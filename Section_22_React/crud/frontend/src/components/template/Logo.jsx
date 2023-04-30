import './Logo.css'
import logo from '../../assets/imgs/logo192.png'
import React from 'react'
import { Link } from 'react-router-dom'


export default props =>
  <aside className="logo">
    <Link to="/">
      <img src={logo} alt="logo" />
    </Link>
  </aside>