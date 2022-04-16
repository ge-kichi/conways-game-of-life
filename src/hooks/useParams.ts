import { reactive, computed } from "vue";
import { useStore } from "vuex";
import { ActionTypes, GetterTypes, key } from "@/store";
import { keyOfPatternGroup } from "@/modules/CGOL";

const { Gen, Pattern } = GetterTypes;
const { SelectPattern } = ActionTypes;

const useParams = () => {
  const { dispatch, getters } = useStore(key);

  return {
    gen: computed(() => getters[Gen]),
    patternOptGroup: reactive(keyOfPatternGroup),
    patternSelected: computed({
      get: () => getters[Pattern],
      set: (value: string) => dispatch(SelectPattern, value),
    }),
  };
};

export default useParams;
