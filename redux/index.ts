import { createStore } from "easy-ts-redux";
import poke, { pokeWatchers } from "./Poke";
import app from "./App";

export type Store = {
  poke: ReturnType<typeof poke>;
  app: ReturnType<typeof app>;
};

const store = createStore({
  reducers: { poke, app },
  watchers: [...pokeWatchers],
});

export default store;
