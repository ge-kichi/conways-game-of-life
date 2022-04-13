import { reactive, computed } from "vue";
import { useStore } from "vuex";
import { zipObj } from "ramda";
import { ActionTypes, GetterTypes, key } from "@/store";
import {
  keyOfOthers,
  keyOfPatternState,
  keyOfStillLifes,
} from "@/modules/CGOL";

const { Gen, Pattern } = GetterTypes;
const { SelectPattern } = ActionTypes;

const useParams = () => {
  const { dispatch, getters } = useStore(key);

  return {
    genContent: computed(() => getters[Gen]),
    patternOptGroup: reactive(
      zipObj(keyOfPatternState, [keyOfStillLifes, keyOfOthers])
    ),
    patternSelected: computed({
      get: () => getters[Pattern],
      set: (value: string) => dispatch(SelectPattern, value),
    }),
  };
};

export default useParams;
