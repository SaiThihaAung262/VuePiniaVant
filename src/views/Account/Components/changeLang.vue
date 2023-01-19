<template>
  <div class="change-lang-con">
    <van-radio-group v-model="state.language">
      <van-radio name="en">English</van-radio>
      <br/>
      <van-radio name="cn">Chinese</van-radio>
    </van-radio-group>
  </div>
</template>

<script setup>
import {changeLang} from "../../../locales/i18n";
import {reactive, watch} from "vue";

const state = reactive({
  language: "en"
});

watch(() => state.language,
    (newValue, oldValue) => {
      console.log("Here is state.changeLang", state.language)
      changeLang(state.language)
    }
)
</script>
<style lang="scss" scoped>
.change-lang-con {
  background: #b7d7c5;
  padding: px2rem(20);
}
</style>
