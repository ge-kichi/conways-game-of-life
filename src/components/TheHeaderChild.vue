<template>
  <div class="the-header-child el-center">
    <div
      class="the-header-child__container el-cluster el-cluster--justify:space-between"
    >
      <h1 class="the-header-child__brand">CGOL</h1>
      <div class="the-header-child__statuses el-cluster">
        <BaseStatus title="GEN" v-bind="gen" />
        <!-- <BaseSelect title="PATTERN" v-bind="rule" /> -->
      </div>
    </div>
  </div>
</template>
<script lang="ts">
// import BaseSelect from "@/components/BaseSelect.vue";
import BaseStatus from "@/components/BaseStatus.vue";
import { useStatuses } from "@/hooks";
export default {
  name: "TheHeaderChild",
  components: { BaseStatus },
  setup() {
    return useStatuses();
  },
};
</script>
<style scoped>
.the-header-child__container {
  width: 100%;
}
.the-header-child__brand {
  margin-bottom: 0;
}
.the-header-child__statuses {
  margin: 0 0 0 auto;
}
</style>
