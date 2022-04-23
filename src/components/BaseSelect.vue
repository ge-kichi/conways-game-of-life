<template>
  <div class="base-select">
    <div class="nes-select is-dark">
      <select @change="$emit('update:modelValue', $event.target.value)">
        <optgroup v-for="(options, name, i) in optGroup" :key="i" :label="name">
          <option
            v-for="(option, i) in options"
            :value="option"
            :key="i"
            :selected="option === modelValue"
          >
            {{ option }}
          </option>
        </optgroup>
      </select>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, PropType } from "vue";
export default defineComponent({
  name: "BaseSelect",
  emits: ["update:modelValue"],
  props: {
    title: {
      type: String,
      required: true,
    },
    optGroup: {
      type: Object as PropType<{ [x: string]: string[] }>,
      required: true,
    },
    modelValue: {
      type: String,
      required: true,
    },
  },
});
</script>
<style scoped>
.base-select {
  font-size: var(--ms-1);
}
.base-select * {
  cursor: inherit;
}
</style>
