<template>
  <div class="user">
    <main class="main-content m-auto p-3">
      <div class="go-back-container text-center d-block">
        <button class="btn p-0" @click="reset">
          <router-link
            @click="reset"
            class="text-decoration-none d-block p-1"
            to="/"
            ><font-awesome-icon
              :icon="['fas', 'angle-left']"
              exact
            ></font-awesome-icon>
            Back</router-link
          >
        </button>
      </div>
      <MainProfile class="mt-3" :data="userData"></MainProfile>
      <Bio :text="userData.bio"></Bio>
      <div class="row mt-5">
        <div class="col-12 col-lg-6 col-xl-4 mt-4">
          <StarsRepositories
            :stars="listOfTopTenStars"
            :names="listOfTopTenStarsNames"
          ></StarsRepositories>
        </div>
        <div class="col-12 col-lg-6 col-xl-4 mt-4">
          <ForksRepositories
            :forks="listOfTopTenForks"
            :names="listOfTopTenForksNames"
          ></ForksRepositories>
        </div>
        <div class="col-12 col-lg-12 col-xl-4 mt-4">
          <AverageStats
            class="mx-auto"
            :stars="averageStars"
            :forks="averageForks"
            style="max-width: 550px"
          ></AverageStats>
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
import { mapState, mapMutations } from "vuex";

export default {
  name: "User",
  data() {
    return {
      firstTenStarRepo: [],
      firstTenForkRepo: [],
    };
  },
  components: {
    MainProfile,
    Bio,
    StarsRepositories,
    ForksRepositories,
    AverageStats,
  },
  computed: {
    ...mapState(["userData", "repoData"]),

    averageStars() {
      let total = 0;
      this.repoData.forEach((repo) => (total += repo.stars_count));
      return (total / this.repoData.length).toFixed(2);
    },
    averageForks() {
      let total = 0;
      this.repoData.forEach((repo) => (total += repo.forks_count));
      return (total / this.repoData.length).toFixed(2);
    },

    listOfTopTenStars() {
      return this.firstTenStarRepo.map((repo) => repo.stars_count);
    },
    listOfTopTenStarsNames() {
      return this.firstTenStarRepo.map((repo) => repo.name);
    },
    listOfTopTenForks() {
      return this.firstTenForkRepo.map((repo) => repo.forks_count);
    },
    listOfTopTenForksNames() {
      return this.firstTenForkRepo.map((repo) => repo.name);
    },
  },
  methods: {
    ...mapMutations(["reset"]),
    setFirstTenStarRepo() {
      let sortedData = this.repoData;
      this.firstTenStarRepo = sortedData
        .sort((a, b) => (a.stars_count > b.stars_count ? -1 : 1))
        .slice(0, 10);
    },
    setFirstTenForkRepo() {
      let sortedData = this.repoData;
      this.firstTenForkRepo = sortedData
        .sort((a, b) => (a.forks_count > b.forks_count ? -1 : 1))
        .slice(0, 10);
    },
  },
  mounted() {
    this.setFirstTenStarRepo();
    this.setFirstTenForkRepo();
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
