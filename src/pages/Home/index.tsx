import BotaoAdicionar from '../../components/BotaoAdicionar'
import BarraLateral from '../../container/BarraLateral'
import ListaDeTarefas from '../../container/ListadeTarefas'

const Home = () => (
  <>
    <BarraLateral mostrarFiltros={true} />
    <ListaDeTarefas />
    <BotaoAdicionar />
  </>
)

export default Home
