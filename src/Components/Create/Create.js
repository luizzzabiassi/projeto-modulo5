import React from 'react';
import Style from './Create.module.css'

const Create = () => {
    return(
        <main className={Style.main}>
            <form className={Style.form}>
                <label className={Style.input}>Nome:</label>
                <input type="text" name="name" required/>
                
                <label className={Style.input}>Teor Alcólico:</label>
                <input type="number" name="number" required/>
                
                <label className={Style.input}>Valor:</label>
                <input type="number" name="valor" required/>
                
                <input className={Style.submit} type="submit" value="Enviar" />
            </form>
        </main>
    )
}

export default Create