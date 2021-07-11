<template>
  <div>
    <Page
      :total="total"
      :current="current"
      @pageChange="handlePageChange($event)"
    />
  </div>
</template>

<script>
import Page from "./index.vue";

export default {
  components: {
    Page,
  },
  data() {
    return {
      total: 300,
      current: 1,
    };
  },
  methods: {
    handlePageChange(newPage) {
      this.current = newPage;
    },
  },
};
</script>

<style scoped>
.icon-container {
  font-size: 50px;
}
</style>
