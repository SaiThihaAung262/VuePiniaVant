<template>
  <div class="account">
    <h1>Hello I am account page</h1>
    <br/>
    <div class="change-lang-con">
      <van-radio-group v-model="language">
        <van-radio name="en">English</van-radio>
        <br/>
        <van-radio name="cn">Chinese</van-radio>
      </van-radio-group>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent, toRefs, reactive, onMounted, computed, watch} from "vue";
import Nav from "../../components/CommonNav/index.vue"
import {changeLang} from "../../locales/i18n";

export default defineComponent({
  name: "home",
  layout: "home",
  components: {
    Nav
  },

  setup() {
    const state = reactive({
      language: "en"
    });

    watch(() => state.language,
        (newValue, oldValue) => {
          console.log("Here is state.changeLang", state.language)
          changeLang(state.language as "cn" | "en")
        }
    )

    onMounted(() => {
    });
    return {
      ...toRefs(state),
    };
  },
});
</script>

<style lang="scss" scoped>
.account {
  .change-lang-con {
    background: #b7d7c5;
    padding: px2rem(20);
  }
}
</style>
