import React from 'react';
import CardTime from './CardTime';
import style from "./Time.module.css"

const Time = () => {
    return ( 
    <section className={style.section}>
       <main className={style.card1}> 
           <CardTime nome="Lucas" idade="25" linkedin="https://www.linkedin.com/" github="https://github.com/" imagem="" iconLinkedin="./Imagem/iconLinkedin.png" iconGithub=""/>
        </main> 
        <main className={style.card2}>
            <CardTime nome="Luany" idade="23" linkedin="" github="" />
        </main>
        <main className={style.card3}>
        <CardTime nome="Luiza" idade="1" linkedin="" github="" />
        </main>
       <main className={style.card4}>
       <CardTime nome="Hiensen" idade="8" linkedin="" github="" />
        </main> 
    </section> 
    );
}
 
export default Time;