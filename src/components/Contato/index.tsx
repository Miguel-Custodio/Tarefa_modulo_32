import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import * as S from './styles'
import { remover, editar } from '../../store/reducers/contatos'
import ContatoClass from '../../models/Contato'
import { Botao, BotaoSalvar } from '../../styles'

type Props = ContatoClass

const Contato = ({
  nome: descricaoOriginal,
  nome,
  telefone,
  email,
  id
}: Props) => {
  const dispatch = useDispatch()
  const [estaEditando, setEstaEditando] = useState(false)
  const [novoNome, setNovoNome] = useState(nome)
  const [novoTelefone, setNovoTelefone] = useState(telefone)
  const [novoEmail, setNovoEmail] = useState(email)
  const [, setDescricao] = useState('')

  useEffect(() => {
    if (descricaoOriginal.length > 0) {
      setDescricao(descricaoOriginal)
    }
  }, [descricaoOriginal])

  return (
    <S.Card>
      <label htmlFor={nome}>
        <input
          type="checkbox"
          id={nome}
          checked={nome === nome}
          onChange={() => setEstaEditando(!estaEditando)}
        />
        <S.Titulo>
          {estaEditando && <em>Editando: </em>}
          {novoNome}
        </S.Titulo>
      </label>
      <S.Tag criterio="nome">{novoNome}</S.Tag>
      <S.Tag criterio="telefone">{novoTelefone}</S.Tag>
      <S.Tag criterio="email">{novoEmail}</S.Tag>
      <S.Descricao
        disabled={!estaEditando}
        value={novoNome}
        onChange={(evento) => setNovoNome(evento.target.value)}
      />
      <S.Descricao
        disabled={!estaEditando}
        value={novoTelefone}
        onChange={(evento) => setNovoTelefone(evento.target.value)}
      />
      <S.Descricao
        disabled={!estaEditando}
        value={novoEmail}
        onChange={(evento) => setNovoEmail(evento.target.value)}
      />
      <S.BarraAcoes>
        {estaEditando ? (
          <>
            <BotaoSalvar
              onClick={() => {
                dispatch(
                  editar({
                    nome: novoNome,
                    email: novoEmail,
                    telefone: novoTelefone,
                    id
                  })
                )
                setEstaEditando(false)
              }}
            >
              Salvar
            </BotaoSalvar>
            <S.BotaoCancelarRemover onClick={() => setEstaEditando(false)}>
              Cancelar
            </S.BotaoCancelarRemover>
          </>
        ) : (
          <>
            <Botao onClick={() => setEstaEditando(true)}>Editar</Botao>
            <S.BotaoCancelarRemover onClick={() => dispatch(remover(id))}>
              Remover
            </S.BotaoCancelarRemover>
          </>
        )}
      </S.BarraAcoes>
    </S.Card>
  )
}

export default Contato
