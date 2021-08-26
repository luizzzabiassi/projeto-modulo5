import React, {useState, useEffect} from "react";
import style from "./Header.module.css";
import {Link} from 'react-router-dom';
import Foto from '../../Assets/Image/logo.png';

const Header = ()=>{
    const container = React.createRef();
    
    const [state, setState] = useState(false)

    const handleButtonClick = () => {
        setState((state) => {
            return {
            open: !state.open,
            };
        });
    };

    const handleClickOutside = (event) => {
        if (
          container.current &&
          !container.current.contains(event.target)
        ) {
          setState({
            open: false,
          });
        }
      };

      useEffect(()=>{
        document.addEventListener("mousedown", handleClickOutside);

        return document.removeEventListener("mousedown", handleClickOutside);
    });

        return( 
    <header className={style.cabecalho}>
        <nav className={style.nav}>
            <Link className={style.logo} to='/'><img src={Foto}/></Link>
            <Link className={style.item} to='/Drinks'>Drinks</Link>
            <Link className={style.item} to='/SobreNos'>Sobre Nós</Link>
            <Link className={style.item} to='/NossoTime'>Nosso Time</Link>
            <div onClick={handleButtonClick} className={`${style.App}, ${style.item}`}>
                <div className={style.container} ref={container}>
                    <button className={style.button}>
                        ☰
                    </button>
                    {state.open && (
                    <div class={style.dropdown}>
                    <ul>
                    <Link className={style.item} to='/create'><li>Create</li></Link>
                    <Link className={style.item} to='/update'><li>Update</li></Link>
                    <Link className={style.item} to='/delete'><li>Delete</li></Link>
                    </ul>
                </div>
                    )}
                </div>
            </div>
        </nav>
    </header>)
}


export default Header;