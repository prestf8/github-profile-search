<template>
  <div class="search vh-100 text-center" style="padding: 8rem;">
    <LinkToGithub></LinkToGithub>
    <main
      v-if="!inFetch"
      class="search-main-content mx-auto w-100"
      style="maxWidth: 400px;"
    >
      <h3 class="search-title mb-4">Enter Github Username</h3>
      <form class="d-flex justify-content-center">
        <input type="text" class="form-control w-100" style="maxWidth: 200px" />
        <button type="submit" class="btn btn-primary">Search</button>
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

import { mapState } from "vuex";

export default {
  components: { LinkToGithub },
  name: "Search",
  computed: {
    ...mapState(["inFetch"]),
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
