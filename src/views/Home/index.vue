<template>
  <div class="home">
    <h1>This is home page</h1>
    <br />

    <div v-for="(item, index) in articleList" :key="index">
      <p v-html="item.content" />
      <br />
    </div>
    <div>total article is : {{ totalArticle }}</div>
    <br />
  </div>
</template>

<script lang="ts">
import { defineComponent, toRefs, reactive, onMounted, computed } from "vue";
import { useHomeStore } from "../../store/useHomeStore";
import { ArticleInfo } from "../../types/index";
export default defineComponent({
  name: "home",
  layout: "home",
  components: {},

  setup() {
    let homeStore = useHomeStore();
    const state = reactive({
      articleList: [] as ArticleInfo[],
      totalArticle: 0,
    });

    const getHomeArticleList = () => {
      homeStore.getArticleData().then((res) => {
        state.articleList = res.list;
        state.totalArticle = res.total;
      });
    };

    onMounted(() => {
      getHomeArticleList();
    });
    return {
      ...toRefs(state),
    };
  },
});
</script>

<style lang="scss" scoped>
.home {
  h1 {
    color: red;
    font-size: px2rem(50);
    background: blue;
    width: 100%;
  }
  .btn {
    background: red;
  }
  .mybBtn {
    display: block;
    margin: 0 auto;
    background: blue;
    border-radius: px2rem(10);
    color: #fff;
  }
}
</style>
