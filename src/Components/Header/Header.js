import React from "react";
import style from "./Header.module.css";
import {Link} from 'react-router-dom';
import Foto from '../../Assets/Image/logo.png';

const Header = ()=>{
  return( 
    <header className={style.cabecalho}>
      <nav className={style.nav}>
        <Link className={style.logo} to='/'><img alt="foto-logo" src={Foto}/></Link>
        <Link className={style.item} to='/Drinks'>Drinks</Link>
        <Link className={style.item} to='/SobreNos'>Sobre Nós</Link>
        <Link className={style.item} to='/NossoTime'>Nosso Time</Link>
        <Link className={style.item} to='/CRUD'>CRUD</Link>
      </nav>
    </header>
  )
}

export default Header;