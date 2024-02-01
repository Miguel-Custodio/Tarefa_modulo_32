import { PayloadAction, createSlice } from '@reduxjs/toolkit'

type FiltroState = {
  contato: string
  criterio: 'nome' | 'email' | 'telefone' | 'todos'
}

const initialState: FiltroState = {
  contato: '',
  criterio: 'todos'
}
const filtroSlice = createSlice({
  name: 'contato',
  initialState,
  reducers: {
    alterarNome: (state, action: PayloadAction<string>) => {
      state.contato = action.payload
    },
    alterarFiltro: (state, action: PayloadAction<FiltroState>) => {
      state.criterio = action.payload.criterio
    }
  }
})

export const { alterarNome, alterarFiltro } = filtroSlice.actions

export default filtroSlice.reducer
