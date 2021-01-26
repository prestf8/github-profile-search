<template>
  <div class="user">
    <main class="main-content m-auto p-3">
      <MainProfile></MainProfile>
      <Bio></Bio>
      <div class="row mt-5">
        <div class="col col-md-6 col-lg-4 mt-3">
          <StarsRepositories></StarsRepositories>
        </div>
        <div class="col col-md-6 col-lg-4 mt-3">
          <ForksRepositories></ForksRepositories>
        </div>
        <div class="col-12 col-lg-4 mt-3">
          <AverageStats></AverageStats>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import MainProfile from "../components/MainProfile.vue";
import Bio from "../components/Bio.vue";
import StarsRepositories from "../components/StarsRepositories.vue";
import ForksRepositories from "../components/ForksRepositories.vue";
import AverageStats from "../components/AverageStats.vue";

export default {
  name: "User",
  components: {
    MainProfile,
    Bio,
    StarsRepositories,
    ForksRepositories,
    AverageStats,
  },
};
</script>

<style scoped lang="scss">
.main-content {
  text-align: left !important;

  width: 95%;
  max-width: 1150px;
  margin: auto;

  @media screen and (min-width: 768px) {
    width: 85%;
  }
}
</style>
