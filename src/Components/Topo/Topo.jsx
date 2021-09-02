import React from 'react'
import style from './style.Module.css'
import bg from '../../Assets/Image/bg2.jpg'


function Topo() {
    return (
        <div >
                <div className={style.edit_div_topo}>
                    
                    <img src={bg} className={style.edit_bg}/>

                <div >
                   
                    <h1 className={style.edit_bg_texto}>É um prazer conhecer você!</h1>

                    <p className={style.edit_texto_p}>O Mafia´s Pub surge no momento em que apaixonados por cerveja se encontram e decidem fazer algo diferente. Unindo cultura e tecnologia, conseguimos diminuir a distância entre nosso Pub e nossos clientes.  </p>
                    
                    
                </div>

                </div>
        </div>
    )
}

export default Topo


