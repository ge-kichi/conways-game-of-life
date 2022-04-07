<template>
  <div class="base-status el-box el-box--invert el-box--padding:0 nes-text">
    <div class="el-center el-center--gutters:ms-1">
      <div>{{ title }}</div>
      <div>{{ content }}</div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "BaseStatus",
  props: {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
  },
});
</script>
<style scoped>
.base-status {
  font-size: var(--ms-1);
}
.base-status * {
  cursor: inherit;
}
</style>
