import { put, select } from '@redux-saga/core/effects';
import { createReducer } from 'easy-ts-redux';
import { NamedAPIResource, NamedAPIResourceList, Pokemon, PokemonClient } from 'pokenode-ts';
import { ValueType } from 'react-native-dropdown-picker';
import { PokemonExt } from '../../types/PokemonExt';
import { selectPokemonIdList } from './selectors';

const client = new PokemonClient();

export type SelectOption = { label: string; value: ValueType };

const { reducer, createAction, prefixer, watchers } = createReducer(
  {
    loading: false,
    types: [] as SelectOption[],
    pokemon_map: {} as Record<string, PokemonExt>,
    pokemon_id_list: [] as number[],
    only_caught: false,
    filter: '',
    selected_types: [] as string[],
  },
  'poke'
);

export const getTypes = createAction({
  type: 'GET_TYPES',
  transformer: (types?: SelectOption[]) => types,
  reducerFn: (state, { payload }) => {
    if (payload) state.types = payload;
  },
  saga: function* () {
    const { results } = (yield client.listTypes(0, 200)) as NamedAPIResourceList;
    const types = (results as NamedAPIResource[]).map(({ name }) => ({ label: name, value: name }));
    yield put({ type: prefixer('GET_TYPES', false), payload: types });
  },
});

export const getPokemons = createAction({
  type: 'GET_POKEMONS',
  transformer: (data?: { map: Record<string, PokemonExt>; idList: number[] }) => data,
  reducerFn: (state, { payload }) => {
    if (payload?.map) state.pokemon_map = { ...state.pokemon_map, ...payload.map };
    if (payload?.idList) state.pokemon_id_list = [...state.pokemon_id_list, ...payload.idList];
  },
  saga: function* () {
    const pokemons: PokemonExt[] = [];
    const offset = ((yield select(selectPokemonIdList)) as number[]).length;
    for (let i = 1; i < 20; i++) {
      const res = (yield client.getPokemonById(offset + i)) as Pokemon;
      pokemons.push({ ...res, status: false });
    }

    const map = pokemons?.reduce((prev, curr) => ({ ...prev, [curr.id]: curr }), {} as Record<string, PokemonExt>);
    const idList = pokemons?.map(({ id }) => id);

    yield put({ type: prefixer('GET_POKEMONS', false), payload: { map, idList } });
  },
});

export const toggleStatus = createAction({
  type: 'TOGGLE_STAUS',
  transformer: (id: number) => id,
  reducerFn: (state, { payload }) => {
    state.pokemon_map[payload].status = !state.pokemon_map[payload].status;
  },
});

export const setFilter = createAction({
  type: 'SET_FILTER',
  transformer: (filter: string) => filter,
  reducerFn: (state, { payload }) => {
    state.filter = payload;
  },
});

export const setSelectedTypes = createAction({
  type: 'SET_SELECTED_TYPES',
  transformer: (types: string[]) => types,
  reducerFn: (state, { payload }) => {
    state.selected_types = payload;
  },
});

export const toggleOnlyCaught = createAction({
  type: 'TOGGLE_ONLY_CAUGHT',
  transformer: () => {},
  reducerFn: (state) => {
    state.only_caught = !state.only_caught;
  },
});

export const pokeWatchers = watchers;
export default reducer;
