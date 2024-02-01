import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import * as S from './styles'
import { RootReducer } from '../../store'
import { alterarNome } from '../../store/reducers/filtro'
import { Botao, Campo } from '../../styles'

type Props = {
  mostrarFiltros: boolean
}

const BarraLateral = ({ mostrarFiltros }: Props) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { contato } = useSelector((state: RootReducer) => state.filtro)

  return (
    <S.Aside>
      <div>
        {mostrarFiltros ? (
          <>
            <Campo
              type="text"
              placeholder="Buscar"
              value={contato}
              onChange={(evento) => dispatch(alterarNome(evento.target.value))}
            />
          </>
        ) : (
          <Botao onClick={() => navigate('/')}>
            voltar a lista de Contatos
          </Botao>
        )}
      </div>
    </S.Aside>
  )
}
export default BarraLateral
