<template>
  <div class="change-lang-con">
    <label class="switch">
      <input type="checkbox" v-model="mode"/>
      <span class="slider round"></span>
    </label>
  </div>
</template>

<script setup>
import {changeLang} from "../../../locales/i18n";
import {onMounted, ref, watch} from "vue";

const mode = ref(false)

watch(() => mode.value,
    (newValue, oldValue) => {

      console.log("Here is switch theme", newValue)
      let htmlElement = document.documentElement;

      if (mode.value) {
        htmlElement.setAttribute("theme", "dark");
      } else {
        htmlElement.setAttribute("theme", "light");
      }
    }
)

onMounted(() => {
  let bodyElement = document.body;
  bodyElement.classList.add("app-background");
})

</script>
<style lang="scss" scoped>

.switch {
  position: relative;
  display: inline-block;
  width: px2rem(96);
  height: px2rem(48);
}

.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #c8c8fa;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: px2rem(24);
  width: px2rem(24);
  left: px2rem(16);
  bottom: px2rem(12);
  background: rgb(255, 255, 255);
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

input:checked + .slider {
  background-color: #414141;
}

input:focus + .slider {
  box-shadow: 0 0 px2rem(2) var(--switch-color);
}

input:checked + .slider:before {
  -webkit-transform: translateX(px2rem(42));
  -ms-transform: translateX(px2rem(42));
  transform: translateX(px2rem(42));
}

/* Rounded sliders */
.slider.round {
  border-radius: px2rem(64);
}

.slider.round:before {
  border-radius: 50%;
}
</style>
