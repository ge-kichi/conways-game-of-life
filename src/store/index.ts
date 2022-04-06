import { InjectionKey } from "vue";
import { createStore, Store } from "vuex";
import { Pattern } from "@/modules/CGOL";

export const key: InjectionKey<Store<State>> = Symbol();

export type PlayState = "played" | "paused" | "stopped";

export type State = {
  pattern: Pattern;
  gen: number;
  playState: PlayState;
};

export const GetterTypes: {
  Pattern: "Pattern";
  Gen: "Gen";
  PlayState: "PlayState";
} = {
  Pattern: "Pattern",
  Gen: "Gen",
  PlayState: "PlayState",
};

export const MutationTypes: {
  UpdatePattern: "UpdatePattern";
  UpdateGen: "UpdateGen";
  UpdatePlayState: "UpdatePlayState";
} = {
  UpdatePattern: "UpdatePattern",
  UpdateGen: "UpdateGen",
  UpdatePlayState: "UpdatePlayState",
};

export const store = createStore<State>({
  state: {
    pattern: "random",
    gen: 0,
    playState: "stopped",
  },
  getters: {
    [GetterTypes.Pattern](state) {
      return state.pattern;
    },
    [GetterTypes.Gen](state) {
      return state.gen.toString();
    },
    [GetterTypes.PlayState](state) {
      return state.playState;
    },
  },
  mutations: {
    [MutationTypes.UpdatePattern](state, pattern: Pattern) {
      state.pattern = pattern;
    },
    [MutationTypes.UpdateGen](state, gen: number) {
      state.gen = gen;
    },
    [MutationTypes.UpdatePlayState](state, playState: PlayState) {
      state.playState = playState;
    },
  },
  actions: {},
  modules: {},
});
