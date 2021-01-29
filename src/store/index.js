import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

// TOKEN:
// f6dd340c669ff3e929fd3b8523010b2873cf6f55

export default new Vuex.Store({
  state: {
    authenticated: false,
    inFetch: false,
    userData: {
      avatar_url: "",
      bio: "",
      company: "",
      created_at: "",
      followers: 0,
      following: 0,
      html_url: "",
      location: "",
      login: "",
      actualName: "",
      public_repos: 0,
    },
    repoData: [],
    errorMessage: "",
  },
  mutations: {
    setErrorMessage(state, { errorMessage }) {
      state.errorMessage = errorMessage;
    },
    toggleInFetch(state) {
      state.inFetch = !state.inFetch;
    },
    setData(state, { userData, repoData }) {
      // USERDATA:
      // avatar_url
      // bio
      // company
      // created_at
      // followers
      // following
      // html_url (LINK TO PROFILE)
      // location
      // login (username)
      // name (actual name)
      // plan => name
      // public_repos

      const {
        avatar_url,
        bio,
        company,
        created_at,
        followers,
        following,
        html_url,
        location,
        login,
        name: actualName,
        public_repos,
      } = userData;

      Object.assign(state.userData, {
        avatar_url,
        bio,
        company,
        created_at,
        followers,
        following,
        html_url,
        location,
        login,
        actualName,
        public_repos,
      });

      for (const property in state.userData) {
        if (state.userData[property] === null) {
          state.userData[property] = "";
        }
      }

      state.repoData = repoData.map((repo) => {
        return {
          name: repo.name,
          forks_count: repo.forks_count,
          stars_count: repo.stargazers_count,
        };
      });
    },
    reset(state) {
      Object.assign(state.userData, {
        avatar_url: "",
        bio: "",
        company: "",
        created_at: "",
        followers: 0,
        following: 0,
        html_url: "",
        location: "",
        login: "",
        actualName: "",
        public_repos: 0,
      });

      state.repoData = [];
      state.authenticated = false;
    },
    toggleAuthentication(state) {
      state.authenticated = !state.authenticated;
    },
  },
  modules: {},
});
