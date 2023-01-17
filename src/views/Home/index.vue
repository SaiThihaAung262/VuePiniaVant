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
    <van-button type="primary" size="small" @click="loginHandler">
      Login
    </van-button>
  </div>
</template>

<script lang="ts">
import { defineComponent, toRefs, reactive, onMounted, computed } from "vue";
import { useHomeStore } from "../../store/useHomeStore";
import { ArticleInfo } from "../../types/index";
import { useUserStore } from "../../store/useUserStore";

export default defineComponent({
  name: "home",
  layout: "home",
  components: {},

  setup() {
    let homeStore = useHomeStore();
    let userStore = useUserStore();
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

    const loginHandler = () => {
      let data = {
        address_type: "ETH",
        wallet_address: "0x893e2765c5c63e60f297c2ad3420f8c23c7b8ce5",
      };

      userStore.userLogin(data).then((res) => {
        console.log("Here is res from home : ", res);
      });
    };

    onMounted(() => {
      getHomeArticleList();
    });
    return {
      ...toRefs(state),
      loginHandler,
    };
  },
});
</script>

<style lang="scss" scoped>
.home {
  h1 {
    color: rgb(255, 255, 255);
    font-size: px2rem(50);
    background: rgb(154, 154, 219);
    width: 100%;
  }
}
</style>
