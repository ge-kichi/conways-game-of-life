<template>
  <a class="base-link" :href="url" target="_blank" rel="noopener noreferrer">{{
    label
  }}</a>
</template>
<script lang="ts">
export default {
  name: "BaseLink",
  props: {
    url: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      required: true,
    },
  },
};
</script>
<style scoped>
.base-link {
  cursor: pointer;
  color: var(--color-neutral);
}
</style>
