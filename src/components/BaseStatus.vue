<template>
  <div
    class="base-status el-box el-box--invert el-box--padding:0 nes-text"
    :class="{
      'app-util-highlight': highlight,
      'app-util-clickable': isClickable,
    }"
  >
    <div class="el-center el-center--gutters:ms-1" @click="$emit('onclick')">
      <div>{{ title }}</div>
      <div>{{ content }}</div>
    </div>
  </div>
</template>
<script lang="ts">
import { ref, SetupContext } from "vue";
export default {
  name: "BaseStatus",
  emits: ["onclick"],
  props: {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    highlight: {
      type: Boolean,
      required: false,
    },
  },
  setup(_: unknown, context: SetupContext) {
    return { isClickable: ref(context.attrs.onclick) };
  },
};
</script>
<style scoped>
.base-status {
  font-size: var(--ms-1);
}
.base-status * {
  cursor: inherit;
}
</style>
