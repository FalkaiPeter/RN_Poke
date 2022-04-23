import { createSelector } from 'reselect';
import store, { Store } from '..';

export const selectConnected = createSelector(
  (state: Store) => state.app.isConnected,
  (isConnected) => isConnected
);
export const selectTheme = createSelector(
  (state: Store) => state.app.theme,
  (theme) => theme
);
