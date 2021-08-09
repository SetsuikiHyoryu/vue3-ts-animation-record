<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Study",

  data() {
    return {
      // 動態決定事件
      event: "blur",
      blockBackgroud: "fff",
    };
  },

  /**
   * 計算屬性和 watch 的區别
   *
   * watch 可以執行異步請求。
   */

  /** 計算屬性和方法的區别
   *
   * 當畫面因爲數據改動而再次渲染時，如果計算屬性依賴的數據沒有發生變化，
   * 則計算屬性不會再次計算，反方法則是每次都會執行。
   */
  methods: {
    changeBlockColor() {
      this.blockBackgroud = "#f76cad";
    },
  },

  /** 生命周期函數
   *
   * - 執行順序
   *   1. app = Vue.createApp(options).mount(el)
   *   2. 初始化事件和生命周期函數
   *   3. beforeCreate()
   *   4. 初始化依賴注入和響應式（即創建 Vue 實例（組件））
   *   5. created()
   *   6. 判斷有無 template option，沒有則將 el 的 innerHTML 作爲模版使用
   *   7. beforeMount()
   *   8. 渲染模版到頁面（創建 app.$el 並用它替換 el）
   *   9. mounted()
   *   10. 數據發生改變
   *   11. beforeUpdate()
   *   12. dom 被重新渲染
   *   13. updated()
   *   14. 使用 app.unmount() 卸載實例
   *   15. beforeUnmount()
   *   16. 完成卸載
   *   17. unmounted()
   */
});
</script>

<template>
  <div class="study">
    <section id="ActiveEvent" class="card">
      <h3>動態決定事件 / 屬性</h3>

      <div class="under-item">
        {{ '<input type="text" @[event]="changeBlockColor" />' }}
      </div>

      <div class="under-item">
        <input type="text" @[event]="changeBlockColor" />

        <div
          class="color-block under-item"
          @click="blockBackgroud = '#fff'"
          :style="{ backgroundColor: blockBackgroud }"
        >
          color block ( click to reset)
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
/* Common Style */
.under-item {
  margin: 10px 0 0;
}

/* Dom Style */
.study {
  display: flex;
}

.study .card {
  border: 1px solid #000;
  margin: 10px 0 0 10px;
  padding: 10px;
}

.study .card .color-block {
  border: 1px solid #888;
  cursor: pointer;
  font-size: 14px;
  padding: 3px 5px;
}
</style>
