import { useSelector } from 'react-redux'
import Tarefa from '../../components/Contato'
import { MainContainer, Titulo } from '../../styles'
import { RootReducer } from '../../store'

const ListaDeContatos = () => {
  const { itens } = useSelector((state: RootReducer) => state.contatos)
  const { contato, criterio } = useSelector(
    (state: RootReducer) => state.filtro
  )

  const filtraContatos = () => {
    let contatosFiltrados = itens
    if (contato !== undefined) {
      contatosFiltrados = contatosFiltrados.filter(
        (item) => item.nome.toLowerCase().search(contato.toLowerCase()) >= 0
      )

      if (criterio === 'nome') {
        contatosFiltrados = contatosFiltrados.filter(
          (item) => item.nome === criterio
        )
      }
      if (criterio === 'telefone') {
        contatosFiltrados = contatosFiltrados.filter(
          (item) => item.telefone === criterio
        )
      } else if (criterio === 'email') {
        contatosFiltrados = contatosFiltrados.filter(
          (item) => item.email === criterio
        )
      }

      return contatosFiltrados
    } else {
      return itens
    }
  }

  const exibeResultadoFiltragem = (quantidade: number) => {
    let mensagem = ''
    const complementacao =
      contato !== undefined && contato?.length > 0 ? ` e "${contato}"` : ''
    if (criterio === 'todos') {
      mensagem = `${quantidade} contato(s) encontrada(s) como: todos ${complementacao}`
    } else {
      mensagem = `${quantidade} contato(s) encontrada(s) como: "${`${contato}=${criterio}`}" ${complementacao}`
    }

    return mensagem
  }

  const contatos = filtraContatos()
  const mensagem = exibeResultadoFiltragem(contatos.length)

  return (
    <MainContainer>
      <Titulo as="p">{mensagem}</Titulo>
      <ul>
        {contatos.map((t) => (
          <li key={t.nome}>
            <Tarefa
              id={t.id}
              nome={t.nome}
              email={t.email}
              telefone={t.telefone}
            />
          </li>
        ))}
      </ul>
    </MainContainer>
  )
}

export default ListaDeContatos
