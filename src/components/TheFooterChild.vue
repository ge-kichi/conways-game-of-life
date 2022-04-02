<template>
  <div class="the-footer-child el-center">
    <small class="the-footer-child__container"
      ><BaseLink
        url="https://github.com/l1ck0h/elementary-cellular-automaton"
        label="GitHub"
      />
      / &copy; 2022 l1ck0h</small
    >
  </div>
</template>
<script lang="ts">
import BaseLink from "@/components/BaseLink.vue";
export default {
  name: "TheFooterChild",
  components: { BaseLink },
};
</script>
<style scoped>
.the-footer-child__container {
  font-size: var(--ms-1);
}
</style>
