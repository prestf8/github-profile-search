<template>
  <div id="app">
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
