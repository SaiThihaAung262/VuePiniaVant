<template>
  <div class="account">
    <h1>Hello I am account page</h1>
  </div>
</template>

<script lang="ts">
import {defineComponent, toRefs, reactive, onMounted, computed} from "vue";
import Nav from "../../components/CommonNav/index.vue"

export default defineComponent({
  name: "home",
  layout: "home",
  components: {
    Nav
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
  background: blue;
}
</style>
