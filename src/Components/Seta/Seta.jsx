import React from 'react'
import '../Seta/seta.css'
import Arrow from '../Seta/seta.gif'
import Slide from '../Slide/Slide.jsx'

function Seta(){
    return (
        <div className="edit-icone ">
            <img src={Arrow} />
            <div> <p className="edit-p">Nosso Ambiente</p> </div>
                <main>
                <Slide/>
                </main>
            <img src={Arrow} />
            <div> <p className="edit-p">Nossa Semana</p> </div>

        </div>
    )
}
export default Seta