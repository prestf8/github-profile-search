<template>
  <div class="user">
    <main class="main-content m-auto p-3">
      <div class="go-back-container text-center d-block">
        <router-link class="text-decoration-none" to="/"
          ><font-awesome-icon
            :icon="['fas', 'angle-left']"
            exact
          ></font-awesome-icon>
          Back</router-link
        >
      </div>
      <MainProfile class="mt-3" :data="userData"></MainProfile>
      <Bio :text="userData.bio"></Bio>
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
import { mapState } from "vuex";

export default {
  name: "User",
  components: {
    MainProfile,
    Bio,
    StarsRepositories,
    ForksRepositories,
    AverageStats,
  },
  computed: {
    ...mapState(["userData"]),
  },
};
</script>

<style scoped lang="scss">
.main-content {
  text-align: left !important;

  width: 95%;
  max-width: 1300px;
  margin: auto;

  @media screen and (min-width: 768px) {
    width: 85%;
  }
}

.go-back-container {
  font-size: 1.2rem;

  @media screen and (min-width: 976px) {
    font-size: 1.5rem;
  }
}
</style>
