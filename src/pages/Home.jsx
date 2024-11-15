import { useState } from 'react';
import AdicionarTarefa from '../components/AdicionarTarefa';
import MostrarTarefas from '../components/MostrarTarefas';

export default function App() {
  const [tarefas, setTarefas] = useState([]);

  return (
    <>
      <AdicionarTarefa lista={tarefas} setLista={setTarefas} />
      <MostrarTarefas lista={tarefas} setLista={setTarefas} />
    </>
  );
};