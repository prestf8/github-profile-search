<template>
  <div
    class="search vh-100 text-center"
    style="padding-top: 9rem; padding-left: 0.5rem; padding-right: 0.5rem;"
  >
    <LinkToGithub></LinkToGithub>

    <main
      v-if="!inFetch"
      class="search-main-content mx-auto w-100"
      style="maxWidth: 400px; minWidth: 220px;"
    >
      <h3 class="search-title mb-4">Enter Github Username</h3>
      <form @submit.prevent="getData" class="d-flex justify-content-center">
        <input v-model="inputV" type="text" class="form-control w-100" />
        <button @click.prevent="getData" type="submit" class="btn btn-primary">
          Search
        </button>
      </form>
    </main>
    <div v-else class="loading-page mx-auto w-100">
      <div
        class="loading-page-content d-flex flex-column justify-content-center align-items-center"
      >
        <span class="loading-page-text text-secondary"
          ><span class="text-info">L</span>oading</span
        >

        <section class="spinner d-flex flex-row">
          <div class="spinner-grow text-info m-2" role="status">
            <span class="sr-only">Loading...</span>
          </div>
          <div class="spinner-grow text-secondary m-2" role="status">
            <span class="sr-only">Loading...</span>
          </div>
          <div class="spinner-grow text-secondary m-2" role="status">
            <span class="sr-only">Loading...</span>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import LinkToGithub from "@/components/LinkToGithub.vue";

import { mapState, mapMutations } from "vuex";

export default {
  components: { LinkToGithub },
  name: "Search",
  data() {
    return {
      inputV: "",
    };
  },
  computed: {
    ...mapState(["inFetch"]),
  },
  methods: {
    ...mapMutations([
      "setErrorMessage",
      "toggleInFetch",
      "setData",
      "toggleAuthentication",
    ]),

    async fetchUserData() {
      const user = await fetch(`https://api.github.com/users/${this.inputV}`, {
        headers: {
          authorization: "token f0ec32cb22452a793aa4e37a87f17a4899c5cc2c",
          accept: "application/vnd.github.v3+json",
        },
      });

      if (user.ok) {
        return await user.json();
      } else {
        throw new Error("User Not Found");
      }
    },

    async fetchRepoData() {
      const repo = await fetch(
        `https://api.github.com/users/${this.inputV}/repos?per_page=100`,
        {
          headers: {
            authorization: "token f0ec32cb22452a793aa4e37a87f17a4899c5cc2c",
            accept: "application/vnd.github.v3+json",
          },
        }
      );

      if (repo.ok) {
        return await repo.json();
      } else {
        throw new Error("Repo Not Found");
      }
    },

    async fetchData() {
      try {
        return await Promise.all([this.fetchUserData(), this.fetchRepoData()]);
      } catch {
        throw new Error("User Not Found");
      }
    },
    async getData() {
      try {
        this.toggleInFetch(); // Toggle On Loading Screen
        const data = await this.fetchData();
        const [userData, repoData] = data;
        await this.setData({ userData, repoData });

        this.toggleInFetch(); // Toggle Off Loading Screen
        // await this.$router.replace({
        //   path: `/user/${this.inputV}`,
        //   name: "User",
        // });
        this.toggleAuthentication(); // Toggles Authentication (from Store)
        await this.$router.replace({
          name: "User",
          params: {
            id: this.inputV,
          },
        });
        this.toggleAuthentication(); // Toggles Authentication (from Store)
      } catch (error) {
        this.toggleInFetch(); // Toggle Off Loading Screen
        this.setErrorMessage({ errorMessage: error.message });
        this.$router.replace({ path: "/404" });
      }
      this.inputV = "";
    },
  },
};
</script>

<style lang="scss">
.search-title {
  font-size: 1.2rem !important;
  font-family: "Montserrat", sans-serif;

  @media screen and (min-width: 600px) {
    font-size: 1.4rem !important;
  }

  @media screen and (min-width: 1200px) {
    font-size: 1.8rem !important;
  }
}

.loading-page-text {
  font-family: "Spartan", sans-serif;
  font-size: 1.5rem;

  @media screen and (min-width: 600px) {
    font-size: 1.8rem !important;
  }
}

.spinner-grow {
  @media screen and (min-width: 600px) {
    width: 50px;
    height: 50px;
  }
}
</style>
