import React from 'react';
import style from "./Time.module.css"

const Time = () => {
    return ( 
    <main className={style.main}>
       <section className={style.card1}>
            <img src="./Imagem/FotoLucas.jpg"/>
            <p>Nome: Lucas </p>
            <p>Idade: 22</p>
            <p>Redes Sociais: 
                <a href="https://www.linkedin.com/in/lucascamisao/"><img src='./Imagem/iconLinkedin.png' /></a>
                <a href=" https://github.com/Gonary"><img src='./Imagem/iconGithub.png'/></a>
            </p>
        </section>
        <section className={style.card2}>
        <img src=""/>
            <p>Nome: Luany </p>
            <p>Idade: 23</p>
            <p>Redes Sociais: 
                <a href=""><img src='./Imagem/iconLinkedin.png' /></a>
                <a href=""><img src='./Imagem/iconGithub.png'/></a>
            </p>
        </section>
        <section className={style.card3}>
        <img src="./Imagem/FotoLuiza.jpg"/>
            <p>Nome: Luiza </p>
            <p>Idade: 19</p>
            <p>Redes Sociais: 
                <a href="https://www.linkedin.com/in/luizzzabiassi/"><img src='./Imagem/iconLinkedin.png' /></a>
                <a href="https://github.com/luizzzabiassi"><img src='./Imagem/iconGithub.png'/></a>
            </p>
        </section>
       <section className={style.card4}>
       <img src="./Imagem/FotoHien.jpg"/>
            <p>Nome: Hiensen </p>
            <p>Idade: 27</p>
            <p>Redes Sociais: 
                <a href="https://www.linkedin.com/in/hiensen-lima-35370b202/"><img src='./Imagem/iconLinkedin.png' /></a>
                <a href="https://github.com/hiensenn"><img src='./Imagem/iconGithub.png'/></a>
            </p>
        </section> 
    </main> 
    );
}
 
export default Time;