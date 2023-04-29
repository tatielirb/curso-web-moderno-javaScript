import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../../node_modules/font-awesome/css/font-awesome.min.css'
import './App.css'
import React from 'react'
import Logo from '../components/template/Logo'
import Nav from '../components/template/Nav'
import Main from '../components/template/Main'
import Footer from '../components/template/Footer'

export default props =>
  <div className="app">
    <Logo/>
    <Nav/>
    <Main icon="home" title="Inicio" subtitle="Segundo projeto do capito de React."/>
    <Footer/>
  </div>