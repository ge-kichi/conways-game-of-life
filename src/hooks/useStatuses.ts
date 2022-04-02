import { reactive, computed } from "vue";
import { useStore } from "vuex";
import { key, GetterTypes } from "@/store";

const { Gen } = GetterTypes;
// const { OpenDialog, UpdateInitState } = MutationTypes;

const useStatuses = () => {
  const { getters } = useStore(key);

  const gen = reactive({
    content: computed(() => getters[Gen]),
  });

  const rule = reactive({
    // content: computed(() => getters[RuleNumber]),
    // highlight: computed(() => getters[OpenedDialog] === "rule"),
    // onclick: () =>
    //   commit(OpenDialog, getters[OpenedDialog] !== "rule" ? "rule" : "none"),
  });

  return { gen, rule };
};

export default useStatuses;
