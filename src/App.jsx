import './App.css'
import { GrFormNext, GrFormPrevious } from 'react-icons/gr'

function App() {

  return (
    <div className="app">
      <div className="header">
        <h2>Deixa sua avaliação</h2>
        <p>Ficamos felizes com a sua compra, preencha o formulário abaixo para avaliar o produto</p>
      </div>
      <div className="form-conteiner">
        <p>etapas</p>
        <form>
          <div className="actions">
            <button type='button'>
              <GrFormPrevious />
              <span>Voltar</span>
            </button>
            <button type='submit'>
              <span>Avançar</span>
              <GrFormNext />
            </button>
          </div>

        </form>
      </div>
    </div>
  )
}

export default App
