import React from 'react'
import '../Topo/style.css'
import bg from '../../assets/Image/bg2.jpg'


function Topo() {
    return (
        <div >
                <div className="edit-div-topo">
                    
                    <img src={bg} className="edit-bg"/>

                <div >
                   
                    <h1 className="edit-bg-texto">É um prazer conhecer você!</h1>

                    <p className="edit-texto-p">O Mafia´s Pub surge no momento em que apaixonados por cerveja se encontram e decidem fazer algo diferente. Unindo cultura e tecnologia, conseguimos diminuir a distância entre nosso Pub e nossos clientes.  </p>
                    
                    
                </div>

                </div>
        </div>
    )
}

export default Topo


