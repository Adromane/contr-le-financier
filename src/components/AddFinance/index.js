import React, { useState } from 'react';
import './style.css'

const AddFinance = ({onAddFinance}) => {

  //States
  const [desc, setDesc] = useState("");
  const [value, setValue] = useState("");
  const [type, setType] = useState(true);


  //Lógica/Funções
  const onChangeDesc = (event) => {
    setDesc(event.target.value)
  }
  const onChangeValue = (event) => {
    setValue(event.target.value)
  }
  const onChangeType = () => {
    if(document.querySelector('input#earnings').checked){
      setType(true)
    } else {
      setType(false)
    }
  }

  const send = (event) => {
    event.preventDefault();
    if(desc === '' || value === ''){
      alert('Description et/ou valeur vide...')
    } else {
      if(!document.querySelector('input#earnings').checked && !document.querySelector('input#expenses').checked){
        alert('Marque se é uma Entrada ou uma Saída...')
      }else {
        onAddFinance(desc, value, type)
        setDesc('')
        setValue(0)
      }
    }
  }
  //retorno
  return (
  <form>
    <div className='form-content'>
      <label for='description'>Description</label>
      <input onChange={onChangeDesc} value={desc} id='description'/>
    </div>
    <div className='form-content'>
      <label for='value'>Valeur</label>
      <input onChange={onChangeValue} type='number' id='value'/>
    </div>
    <div onChange={onChangeType} className='form-content expense-or-earning'>
      <input type='radio' name='expense-or-earning' id='earnings'/>
      <label for='earnings'>Entrée</label>

      <input type='radio' name='expense-or-earning' id='expenses'/>
      <label for='expenses'>Sortie</label>
    </div>
    <div className='form-content'>
      <button onClick={send}>AJOUTER</button>
    </div>
  </form>
  );
};

export default AddFinance;
