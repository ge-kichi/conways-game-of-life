import { reactive, computed } from "vue";
import { useStore } from "vuex";
import { key, GetterTypes, MutationTypes } from "@/store";
import { Patterns } from "@/modules/CGOL";

const { Gen, Pattern } = GetterTypes;
const { UpdatePattern } = MutationTypes;

const useParams = () => {
  const { commit, getters } = useStore(key);

  const genContent = computed(() => getters[Gen]);
  const patternOptions = reactive(Patterns);
  const patternSelected = computed({
    get: () => getters[Pattern],
    set: (value: string) => commit(UpdatePattern, value),
  });

  return { genContent, patternOptions, patternSelected };
};

export default useParams;
