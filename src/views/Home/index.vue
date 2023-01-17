<template>
  <div class="home">
    <h1>This is home page</h1>
    <br />
    <van-button type="primary" @click="setMyUser">Set User</van-button>
    &nbsp;
    <van-button type="primary" @click="setMyAdmin">Set Admin</van-button>
    <br />
    <br />

    <div v-for="(item, index) in articleList" :key="index">
      <p>{{ item.id }}</p>
    </div>

    <p>User name :{{ userName }}</p>
    <p>Admin name :{{ adminName }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent, toRefs, reactive, onMounted, computed } from "vue";
import { useUserStore } from "../../store/user";
import { useAdminStore } from "../../store/admin";
import { useHomeStore } from "../../store/home";
import { ArticleInfo } from "../../types/index";
export default defineComponent({
  name: "home",
  layout: "home",
  components: {},

  setup() {
    let userStore = useUserStore();
    let adminStore = useAdminStore();
    let homeStore = useHomeStore();
    const state = reactive({
      userName: computed(() => userStore.user?.name),
      adminName: computed(() => adminStore.admin?.username),
      articleList: [] as ArticleInfo[],
      totalArticle: 0,
    });

    const setMyUser = () => {
      let userData = {
        name: "My user name",
        age: 10,
      };
      userStore.addUserList(userData);
      console.log("My user name is 🍍::::", userStore.user?.name);
    };
    const setMyAdmin = () => {
      let adminData = {
        username: "My Admin name",
        password: "11111",
      };
      adminStore.addAdminList(adminData);
      console.log("My Admin name is 🍍::::", adminStore.admin?.username);
    };

    const getHomeArticleList = () => {
      homeStore.getArticleData().then((res) => {
        state.articleList = res.list;
        state.totalArticle = res.total;
        console.log("Here is result in mounted home : ", state.articleList);
      });
    };

    onMounted(() => {
      getHomeArticleList();
    });
    return {
      ...toRefs(state),
      setMyUser,
      setMyAdmin,
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
