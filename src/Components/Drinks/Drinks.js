import React, { useState } from "react";
import styles from "./Drinks.module.css";

function Drinks() {
  const [dados, setDados] = useState([]);
  const [value, setValue] = useState("");

  const onChangeSelect = event => {
    fetch(`https://pub-t5.herokuapp.com/${event.target.value}`)
      .then(resp => resp.json())
      .then(json => setDados(json.result))
      .catch(erro => console.log(erro));
  };

  const onChangeInput = event => {
    const input = event.target.value;
    setValue(input);
  };

  const resultSearch = () => {
    for (let i = 0; i < dados.length; i++) {
      if (dados[i].NOME?.toLowerCase().includes(value.toLowerCase())) {
        return true;
      }
    }
    return false;
  };

  return (
    <main className={styles.main}>
      <label className={styles.filter}>Filtros:</label>
      <select className={styles.select} onChange={onChangeSelect}>
        <option>Selecione</option>
        <option value="todas_bebidas_com_alcool">Com Álcool</option>
        <option value="todas_bebidas_sem_alcool">Sem Álcool</option>
      </select>

      <label className={styles.search}>Buscar:</label>
      <input className={styles.input} type="text" onChange={onChangeInput} />

      <section className={styles.drinks}>
        {/*resultSearch() ? null : <h1>Drink não encontrado!</h1>*/}
        {dados.map(item => {
          return (
            <div className={styles.drink} key={item.ID}>
              {item.NOME?.toLowerCase().includes(value.toLowerCase()) ? (
                <>
                  <p>{item.ID}</p>
                  <h4 className={styles.name}>{item.NOME}:</h4>
                  {item.TEOR_ALCOOLICO ? <p className={styles.text}>Teor Alcoólico: {item.TEOR_ALCOOLICO}</p> : null}
                  <p className={styles.text}>Preço: {item.VALOR}</p>
                </>
              ) : null}
            </div>
          );
        })}
      </section>
    </main>
  );
}

export default Drinks;
