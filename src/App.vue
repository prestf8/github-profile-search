<template>
  <div class="vh-100" id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style lang="scss">
$bg-color: #cccccc;

#app {
  background-color: $bg-color;
}
</style>
