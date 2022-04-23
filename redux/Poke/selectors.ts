import { createSelector } from 'reselect';
import { Store } from '..';

export const selectTypes = createSelector(
  (state: Store) => state.poke.types,
  (types) => types
);

export const selectPokemon = (id: number) =>
  createSelector(
    (state: Store) => state.poke.pokemon_map[id],
    (pokemon) => pokemon
  );

export const selectPokemonIdList = createSelector(
  (state: Store) => state.poke.pokemon_id_list,
  (idList) => idList
);

export const selectFilter = createSelector(
  (state: Store) => state.poke.filter,
  (filter) => filter
);

export const selectOnlyCaught = createSelector(
  (state: Store) => state.poke.only_caught,
  (onlyCaught) => onlyCaught
);

export const selectSelectedTypes = createSelector(
  (state: Store) => state.poke.selected_types,
  (types) => types
);
