import React, {useState} from 'react';
import Style from './Delete.module.css'

const DeleteSA = () => {
    const [IDSA, setIDSA] = useState(undefined);

    const selecionaID = (event) =>{
        console.log(event.target.value);
        setIDSA(event.target.value)
    };

    const deleteSA = (event) => {
        event.preventDefault();
        
        let body = {
            ID:IDSA,
        };
            console.log(IDSA)
            fetch(`https://pub-t5.herokuapp.com/bebidas_sem_alcool/${IDSA}`, {
            method: 'DELETE',
            headers:{
                'Acess-Control-Origin': '*',
                'Accept':'application/json',
                'Content-Type': 'application/json'
            },
            mode: 'cors',
            body:JSON.stringify(body)
            })
            .catch(err => console.log(err))
    }

    return(
            <section>
            <h1>Bebidas Sem Álcool</h1>
            <form onSubmit={deleteSA} className={Style.form}>
                <label className={Style.label}>Id da bebida a ser deletada: </label>
                <input className={Style.input}
                type="number"
                value={IDSA}
                onChange={selecionaID}
                ></input>

                    <input className={Style.submit} type="submit" value="Enviar" />
                </form>
                </section>
    )
}

export default DeleteSA