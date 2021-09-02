import React, {useState} from 'react';
import Style from './Delete.module.css'

const DeleteCA = () => {

    const [IDCA, setIDCA] = useState(undefined);

    const selecionaIDCA = (event) =>{
        console.log(event.target.value);
        setIDCA(event.target.value)
    };
    
    const deleteCA = (event) => {
        event.preventDefault();
        
        let body = {
            ID:IDCA,
        };
        console.log(IDCA)
        fetch(`https://pub-t5.herokuapp.com/bebidas_com_alcool/${IDCA}`,{
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
                <h1>Bebidas com Álcool</h1>
                <form onSubmit={deleteCA} className={Style.form}>
                    <label className={Style.label}>Id da bebida a ser deletada: </label>
                    <input className={Style.input}
                    type="number"
                    value={IDCA}
                    onChange={selecionaIDCA}
                    ></input>

                    <input className={Style.submit} type="submit" value="Enviar" />
                </form>
            </section>
    )
}
export default DeleteCA