import React, { useEffect}  from 'react'
import '../ImgGrad/Img.css'
import Aos from 'aos'
import 'aos/dist/aos.css'

import petisco from '../../assets/Image/petisco.jpg'
import hp from '../../assets/Image/happyhour.jpg'
import karaoke from '../../assets/Image/karaoke.jpg'


function ImgGrad() {

    useEffect(() => {
        Aos.init({duration:1000})
    }, [])
    

    return (
        
            <div className="edit-div-default" >



                    <div className="edit-div">
                        <img src={petisco} className="img-default" data-aos="fade-right" />
                        <p className="edit-texto-p"  data-aos="fade-up">Você estar bem alimentado é uma questão de honra, nosso cardápio está cheio de sabores para você descobrir. Durante todos os dias servimos estes incríveis petiscos para acompanhar aquela reunião com amigos e aquele happyhour depois do trabalho. </p>
                    </div>

                    <div className="edit-div-2">
                    <p className="edit-texto-p" data-aos="fade-right">Falando em reunir, aqui no Mafia´s Pub você tem uma lista gigatesca de opções de drinks para saborear junto com seus amigos. Nosso bar permite que você peça seu drink pelo nosso app , mais  OO QUEE? <br/>Isso mesmo, você só precisa cadastrar seu nome, sua mesa e pode pedir a qualquer momento que logo mais seu drink chegará até você.</p>
                        <img src={hp} className="img-default"  data-aos="fade-up"/>
                        
                    </div>

                    <div className="edit-div">
                        <img src={karaoke} className="img-default" data-aos="fade-right" />
                        <p className="edit-texto-p"  data-aos="fade-up">Essa é para você que gosta de soltar a voz. Então, Todo final de semana você pode estravazar e liberar geral o seu canto, temos um palco esperando pela próxima adele. Gostou? tem mais ! se o seu show for épico, passa lá no bar pra pegar o seu trofeú... Aquela caipirinha maravilhosa.</p>
                    </div>
                      
                </div> 
        
    )
}
export default ImgGrad