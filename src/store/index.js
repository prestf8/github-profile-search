import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

// TOKEN:
// f6dd340c669ff3e929fd3b8523010b2873cf6f55

export default new Vuex.Store({
  state: {
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
      name: "",
      planType: "",
      public_repos: 0,
    },
    repoData: {},
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
      console.log(userData, repoData);
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
        name,
        plan: { name: planType },
        public_repos,
      } = userData;

      state.userData = {
        avatar_url,
        bio,
        company,
        created_at,
        followers,
        following,
        html_url,
        location,
        login,
        name,
        planType,
        public_repos,
      };

      for (const property in state.userData) {
        if (state.userData[property] === null) {
          state.userData[property] = "";
        }
      }

      alert(repoData);
    },
  },
  modules: {},
});
