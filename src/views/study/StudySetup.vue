<script lang="ts" setup>
import Article from "@/components/Article.vue";

/** 相當於 data() { return { articleName:  "共産黨宣言"} } */
const articleName: string = "共産黨宣言";

const article = {
  title: "共産黨宣言",
  author: "馬克思 / 恩格斯",
  body: "一個幽靈，共産主義的幽靈，在歐洲徘徊...",
};

const hancleClick = () => {
  console.log("pressed");
};
</script>

<template>
  <div id="StudySetup" class="setup">
    <section class="card">
      <div>{{ articleName }}</div>
    </section>

    <Article :article="article" @press="hancleClick" />
  </div>
</template>

<style scoped>
/* Common Style */
.under-item {
  margin: 10px 0 0;
}

.card {
  border: 1px solid #000;
  margin: 10px 0 0 10px;
  padding: 10px;
}

/* Dom Style */
.setup {
  display: flex;
}
</style>
