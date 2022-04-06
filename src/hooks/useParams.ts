import { reactive, computed } from "vue";
import { useStore } from "vuex";
import { key, GetterTypes, MutationTypes } from "@/store";
import { Patterns } from "@/modules/CGOL";

const { Gen, Pattern } = GetterTypes;
const { UpdatePattern, UpdatePlayState } = MutationTypes;

const useParams = () => {
  const { commit, getters } = useStore(key);

  return {
    genContent: computed(() => getters[Gen]),
    patternOptions: reactive(Patterns),
    patternSelected: computed({
      get: () => getters[Pattern],
      set: (value: string) => {
        commit(UpdatePattern, value);
        commit(UpdatePlayState, "stopped");
      },
    }),
  };
};

export default useParams;
