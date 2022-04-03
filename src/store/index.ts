import { InjectionKey } from "vue";
import { createStore, Store } from "vuex";
import { Pattern } from "@/modules/CGOL";

export const key: InjectionKey<Store<State>> = Symbol();

export type State = {
  pattern: Pattern;
  gen: number;
};

export const GetterTypes: {
  Pattern: "Pattern";
  Gen: "Gen";
} = {
  Pattern: "Pattern",
  Gen: "Gen",
};

export const MutationTypes: {
  UpdatePattern: "UpdatePattern";
  UpdateGen: "UpdateGen";
} = {
  UpdatePattern: "UpdatePattern",
  UpdateGen: "UpdateGen",
};

export const store = createStore<State>({
  state: {
    pattern: "random",
    gen: 0,
  },
  getters: {
    [GetterTypes.Pattern](state) {
      return state.pattern;
    },
    [GetterTypes.Gen](state) {
      return state.gen.toString();
    },
  },
  mutations: {
    [MutationTypes.UpdatePattern](state, pattern: Pattern) {
      state.pattern = pattern;
    },
    [MutationTypes.UpdateGen](state, gen: number) {
      state.gen = gen;
    },
  },
  actions: {},
  modules: {},
});
