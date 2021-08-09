<script lang="ts" setup>
// Dependcies
import { Ref, ref } from "vue";
import axios from "axios";

interface Socks {
  type: string;
  color: string;
}

// States
const socks: Ref<Socks> = ref({ type: "", color: "" });
let isShowLoading: Ref<boolean> = ref(true);

// Functions
const getSocks = async (): Promise<void> => {
  const { data }: any = await axios.get(
    "http://localhost:8090/api/v1/socks/list"
  );

  socks.value = data;
  isShowLoading.value = false;
};
</script>

<template>
  <div id="StudyConnect">
    <button @click="getSocks">click to get socks list</button>

    <strong v-if="isShowLoading" style="margin: 10px 0 0 10px">
      Pleast click and get socks
    </strong>

    <div v-else class="under-item" style="display: flex;">
      <article class="card" v-for="(sock, index) in socks" :key="index">
        <div>type: {{ sock.type }}</div>
        <div>color: {{ sock.color }}</div>
      </article>
    </div>
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

button {
  height: 40px;
  margin: 10px 0 0 10px;
  width: 200px;
}
</style>
