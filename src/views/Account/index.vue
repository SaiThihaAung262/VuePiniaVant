<template>
  <div class="account">
    <h1>Hello I am account page</h1>
    <br/>
    <change-lang></change-lang>
    <br/>
    <switch-theme></switch-theme>
  </div>
</template>

<script lang="ts">
import {defineComponent, toRefs, reactive, onMounted, computed, watch} from "vue";
import Nav from "../../components/CommonNav/index.vue"
import ChangeLang from "./Components/changeLang.vue"
import SwitchTheme from "./Components/switchTheme.vue"

export default defineComponent({
  name: "home",
  layout: "home",
  components: {
    Nav,
    ChangeLang,
    SwitchTheme
  },

  setup() {
    const state = reactive({});

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
}
</style>
