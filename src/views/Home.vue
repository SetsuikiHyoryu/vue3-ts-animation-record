<template>
  <div class="home">
    <h2>{{ unite }}</h2>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Home",
  data() {
    return {
      unite: "全世界的無産者，聯合起來！",
    };
  },
});
</script>
