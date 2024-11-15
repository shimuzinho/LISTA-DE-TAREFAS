import { useState } from 'react';
import style from '../styles/adicionarTarefa.module.css';

export default function AdicionarTarefa({ lista, setLista }) {
  const [titulo, setTitulo] = useState('');
  const [color, setColor] = useState('#ffffff');

  const adicionar = (titulo, color) => {
    const id = Date.now();
    lista = [...lista, {
      id,
      titulo,
      color,
      feita: false
    }];
    setLista(lista);
  };

  return (
    <form className={style.formulario}>
      <label className={style.label} htmlFor='titulo'>Titulo da tarefa: </label>
      <input
        className={style.entrada}
        type='text'
        name='titulo'
        onChange={(event) => setTitulo(event.target.value)}
        value={titulo}
        placeholder="Digite o título da tarefa"
      />
      <label className={style.label} htmlFor='cor'>Cor da tarefa: </label>
      <input
        className={style.entrada}
        type='color'
        name='cor'
        onChange={(event) => setColor(event.target.value)}
        value={color}
      />
      <button
        className={style.botaoAdicionar}
        type="button"
        onClick={
          () => {
            adicionar(titulo, color)
          }
        }>
        Adicionar Tarefa
      </button>
    </form>
  );
}