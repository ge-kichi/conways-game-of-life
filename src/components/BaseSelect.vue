<template>
  <label for="dark_select" style="color: #fff">nes-select.is-dark</label>
  <div class="nes-select is-dark">
    <select required id="dark_select">
      <option value="" disabled selected hidden>Select...</option>
      <option value="0">To be</option>
      <option value="1">Not to be</option>
    </select>
  </div>
</template>
<script lang="ts">
export default {
  name: "BaseSelect",
  emits: ["update:modelValue"],
  props: {
    attrs: {
      type: Object,
      required: false,
    },
    modelValue: {
      type: String,
      required: true,
    },
  },
};
</script>
