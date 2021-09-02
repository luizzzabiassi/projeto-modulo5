import React  from 'react'
import style from './Img.Module.css'
import petisco from '../../Assets/Image/petisco.jpg'
import hp from '../../Assets/Image/happyhour.jpg'
import karaoke from '../../Assets/Image/karaoke.jpg'


function ImgGrad() {

    

    return (
        
            <div className={style.edit_div_default}>

                    <div className={style.edit_div}>
                        <img src={petisco}  className={style.img_def}/>
                        <p className={style.edit_texto_p} >Você estar bem alimentado é uma questão de honra, nosso cardápio está cheio de sabores para você descobrir. Durante todos os dias servimos estes incríveis petiscos para acompanhar aquela reunião com amigos e aquele happyhour depois do trabalho. </p>
                    </div>

                    <div className={style.edit_div_2}>
                    <p className= {style.edit_texto_p}>Falando em reunir, aqui no Mafia´s Pub você tem uma lista gigatesca de opções de drinks para saborear junto com seus amigos. Nosso bar permite que você peça seu drink pelo nosso app , mais  OO QUEE? <br/>Isso mesmo, você só precisa cadastrar seu nome, sua mesa e pode pedir a qualquer momento que logo mais seu drink chegará até você.</p>
                        <img src={hp} className={style.img_def}  />
                        
                    </div>

                    <div className={style.edit_div}>
                        <img src={karaoke} className={style.img_def}  />
                        <p className= {style.edit_texto_p} >Essa é para você que gosta de soltar a voz. Então, Todo final de semana você pode estravazar e liberar geral o seu canto, temos um palco esperando pela próxima adele. Gostou? tem mais ! se o seu show for épico, passa lá no bar pra pegar o seu trofeú... Aquela caipirinha maravilhosa.</p>
                    </div>
                    
                </div> 
        
    )
}
export default ImgGrad