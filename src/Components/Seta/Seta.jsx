import React from 'react'
import style from './Seta.Module.css'
import Arrow from './seta.gif'

function Seta(){
    return (
        <div className={style.edit_icone}>
            <img src={Arrow} />
            <div> <p className={style.edit_p}>Nosso Ambiente</p> </div>
            {/* carrousel */}
            <img src={Arrow} />
            <div> <p className={style.edit_p}>Nossa Semana</p> </div>

        </div>
    )
}
export default Seta