//componentes funcionais.
//um arquivo por componente
import MeuComponente from "../components/MeuComponente"
import MeuContador from "../components/MeuContador"
import MinhaLista from "../components/MinhaLista"

function App() {

  return (
    <div>
      <h1>Estados e eventos</h1>
      <MeuComponente/>
      <MeuBotao conteudo='me clique' />
      <MeuBotao conteudo='aqui tambem' />
      <MeuContador />
      <h1>Lista no React</h1>
      <MinhaLista />
    </div>
  )
}

//props são parâmetros que a gente pode passar pra o componente
function MeuBotao(props) {
  return (
    <button>{props.conteudo}</button>
  )
}
 
export default App
