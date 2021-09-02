import React, { useState } from 'react';

function Drinks() {
  const [ dados, setDados ] = useState([])

  fetch('')
  .then(resp => resp.json())
  .then(resp => setDados(resp))
  .catch()

  return (
    <main>
      <span>Filtros:</span>
      <select>
        <option>Selecione uma opção:</option>
        <option>Com Álcool</option>
        <option>Sem Álcool</option>
      </select>

      <label>Buscar:</label>
      <input />

      <ul>
        {dados.map(item => (
          <li>{item.nome}</li>
        ))}
      </ul>
    </main>
  )
}

export default Drinks;