<template>
  <div class="user">
    <main class="main-content m-auto" style="width: 85%;">
      <MainProfile></MainProfile>
      <Bio></Bio>
    </main>
  </div>
</template>

<script>
import MainProfile from "../components/MainProfile.vue";
import Bio from "../components/Bio.vue";

export default {
  name: "User",
  components: {
    MainProfile,
    Bio,
  },
};
</script>

<style scoped lang="scss">
.main-content {
  text-align: left !important;
}
</style>
