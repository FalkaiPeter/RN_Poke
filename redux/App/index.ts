import { createReducer } from 'easy-ts-redux';
import { ThemeVariant } from '../../types/Theme';

const { reducer, createAction } = createReducer({ isConnected: false, theme: 'light' as ThemeVariant }, 'app');

export const setConnected = createAction({
  type: 'SET_CONNECTED',
  transformer: (isConnected: boolean) => isConnected,
  reducerFn: (state, { payload }) => {
    state.isConnected = payload;
  },
});

export const setTheme = createAction({
  type: 'SET_THEME',
  transformer: (theme: ThemeVariant) => theme,
  reducerFn: (state, { payload }) => {
    state.theme = payload;
  },
});

export default reducer;
