<template>
  <div
    id="app__container"
    class="el-cover el-cover--space:ms-1 el-cover--minHeight:100%"
  >
    <header>
      <TheHeaderChild />
    </header>
    <main ref="sketchIn__container" class="sketchIn__container">
      <canvas
        ref="sketchIn"
        class="sketchIn el-cover__centered el-center el-center--gutters:0"
      />
    </main>
    <footer>
      <TheFooterChild />
    </footer>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import TheHeaderChild from "@/components/TheHeaderChild.vue";
import TheFooterChild from "@/components/TheFooterChild.vue";
import { useCanvas } from "@/hooks";
export default defineComponent({
  name: "App",
  components: { TheHeaderChild, TheFooterChild },
  setup() {
    return useCanvas();
  },
});
</script>
<style>
:root {
  --color-light: rgb(255, 255, 255);
  --color-neutral: rgb(182, 182, 183);
  --color-dark: rgb(33, 37, 41);
}
* {
  cursor: auto;
  color: var(--color-light);
  background-color: var(--color-dark);
}
html {
  touch-action: manipulation;
}
html,
body,
#app,
#app__container,
.sketchIn__container {
  width: 100%;
  height: 100%;
}
.sketchIn__container {
  max-width: var(--ms-measure0);
  margin: auto;
}
.sketchIn {
  width: 100%;
  height: 100%;
  cursor: pointer;
  border: solid thin white;
}
</style>
