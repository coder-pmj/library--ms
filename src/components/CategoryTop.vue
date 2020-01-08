<template>
  <div class="page-top">{{title}}</div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
@Component
export default class CategoryTop extends Vue {
  @Prop() private title!: string;
}
</script>

<style scoped>
.page-top {
  padding: 8px 15px 8px 30px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  font-weight: 800;
  letter-spacing: 1em;
}
</style>