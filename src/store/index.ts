import { InjectionKey } from "vue";
import { createStore, Store } from "vuex";
import { Pattern } from "@/modules/CGOL";

export const key: InjectionKey<Store<State>> = Symbol();

export type State = {
  pattern: Pattern;
  gen: number;
};

export const GetterTypes: {
  Gen: "Gen";
} = {
  Gen: "Gen",
};

export const MutationTypes: {
  Gen: "Gen";
} = {
  Gen: "Gen",
};

export const store = createStore<State>({
  state: {
    pattern: "random",
    gen: 0,
  },
  getters: {
    [GetterTypes.Gen](state) {
      return state.gen;
    },
  },
  mutations: {
    [MutationTypes.Gen](state, gen: number) {
      state.gen = gen;
    },
  },
  actions: {},
  modules: {},
});
