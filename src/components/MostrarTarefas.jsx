import style from '../styles/mostrarTarefas.module.css';

export default function MostrarTarefas({ lista, setLista }) {
  const hexToRgb = (hex) => {
    hex = hex.replace(/^#/, '');
    const bigint = parseInt(hex, 16);
    return `rgb(${255 - (bigint >> 16) & 255}, ${255 - (bigint >> 8) & 255}, ${255 - bigint & 255})`;
  };

  const excluirTarefa = (tarefa) => {
    const novaLista = lista.filter(el => el.id != tarefa.id);
    setLista(novaLista);
  };

  const marcarFeita = (id) => {
    const novaLista = lista.map((el) => {
      if (el.id == id) {
        el.feita = !el.feita;
      }
      return el;
    });
    setLista(novaLista);
  };

  return (
    <>
      {
        lista.map((el) =>
          <div className={style.containerTarefas} key={el.id} style={{ backgroundColor: el.color != '' ? el.color : 'black' }}>
            <p className={style.textoTarefa} style={{ textDecoration: el.feita ? 'line-through' : 'none', color: hexToRgb(el.color) }}>{el.titulo}</p>
            <div>
            <button className={style.botaoFeito} onClick={
              () => {
                marcarFeita(el.id);
              }
            }>{el.feita ? 'Desfazer :(' : 'Feito!'}</button>
            <button className={style.botaoExcluir} onClick={() => excluirTarefa(el)}>Excluir</button>
            </div>
          </div>
        )
      }
    </>
  );
};