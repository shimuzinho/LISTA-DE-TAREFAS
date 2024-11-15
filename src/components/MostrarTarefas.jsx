import style from '../styles/mostrarTarefas.module.css';

export default function MostrarTarefas({ lista, setLista }) {
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
          <div className={style.containerTarefas}key={el.id} style={{ backgroundColor: el.color != '' ? el.color : 'black' }}>
            <p className={style.textoTarefa} style={{ textDecoration: el.feita ? 'line-through' : 'none' }}>{el.titulo}</p>
            <button className={style.botaoFeito} onClick={
              () => {
                marcarFeita(el.id);
              }
            }>{el.feita ? 'Desfazer :(' : 'Feito!'}</button>
          </div>
        )
      }
    </>
  );
};