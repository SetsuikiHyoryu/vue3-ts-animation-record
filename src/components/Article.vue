<script lang="ts" setup>
import { defineProps, defineEmits, useAttrs, useSlots, ref } from "vue";

type Article = { title: string; author: string; body: string };

/** State */
const isWhite = ref(true);

/** Props
 * 常規：
 *   export default {
 *     setup(props) {};
 *   }
 */
const props = defineProps<{ article: Article }>();
const test = props?.article;

/** Emits
 * 常規：
 *   export default {
 *     emits:['press'];
 *   }
 */
const emits = defineEmits(["press"]);

const handleClick = () => {
  emits("press");
  isWhite.value = !isWhite.value;
};

/** Context
 * 常規：
 *   export default {
 *     setup(props, context) {};
 *   }
 */
const attrs = useAttrs();
const slots = useSlots();
</script>

<template>
  <section
    id="Article"
    class="card"
    :style="{ backgroundColor: isWhite ? '#fff' : '#888' }"
  >
    <h3>{{ test.title }}</h3>
    <h4>{{ test.author }}</h4>
    <article>{{ test.body }}</article>

    <button type="button" class="under-item" @click="handleClick">
      切換背景色
    </button>
  </section>
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
</style>
