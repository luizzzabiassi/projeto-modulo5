import React from "react";
import style from "./CardTime.module.css"

const CardTime = (props) =>{
    const { nome, idade, linkedin, github, imagem} = props

    return(
    
        <section>
            <img src={imagem}/>
            <p>Nome: {nome} </p>
            <p>Idade: {idade}</p>
            <p>Redes Sociais: 
                <a href={linkedin}><img src='./Imagem/iconLinkedin.png' /></a>
                <a href={github}><img src='./Imagem/iconGithub.png'/></a>
            </p>
            
        </section>
    
    )
}

export default CardTime