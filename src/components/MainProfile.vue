<template>
  <main class="main-profile card">
    <div class="container-fluid p-0">
      <div class="row">
        <div class="d-none d-sm-block col-sm-5 col-md-4 col-lg-3">
          <img :src="data.avatar_url" class="img-fluid" />
        </div>
        <div class="col-12 col-sm-7 col-md-8 col-lg-9">
          <div
            class="card-body h-100 d-flex flex-column justify-content-between align-items-between"
          >
            <section class="card-body-first-row">
              <h5 class="card-title mb-2" id="title">
                {{ data.login }} ({{ data.actualName }})
              </h5>
              <p class="card-text mb-1" id="company">
                {{ data.company }}
              </p>
              <p class="card-text mb-1" id="location">
                {{ data.location }}
              </p>
            </section>
            <section class="card-body-second-row">
              <p class="card-subtitle mb-1 text-muted" id="joined">
                {{ this.fromNow }}
              </p>
              <a :href="data.html_url" class="card-link" target="_blank"
                >Open Profile</a
              >
            </section>
          </div>
        </div>
      </div>
    </div>
    <div class="card-footer">
      <ul
        class="list-group list-group-flush d-flex flex-column flex-md-row"
        id="extra-info"
      >
        <li class="list-group-item" id="followers">
          Followers ({{ data.followers }})
        </li>
        <li class="list-group-item" id="following">
          Following ({{ data.following }})
        </li>
        <li class="list-group-item border-bottom" id="public-repos">
          Public Repos ({{ data.public_repos }})
        </li>
      </ul>
    </div>
  </main>
</template>

<script>
import moment from "moment";

export default {
  name: "MainProfile",
  props: {
    data: Object,
  },

  computed: {
    fromNow() {
      return "Joined " + moment(this.data.created_at).fromNow();
    },
  },
};
</script>

<style scoped lang="scss">
.list-group-item {
  background-color: transparent;
}
#title {
  font-size: 1.15rem;
}

#company {
  font-size: 0.9rem;
}

#location {
  font-size: 0.9rem;
}

#joined {
  font-size: 0.9rem;
}

#extra-info > .list-group-item {
  font-size: 0.9rem;
}

@media screen and (min-width: 500px) {
  #title {
    font-size: 1.3rem;
  }
}

@media screen and (min-width: 768px) {
  #title {
    font-size: 1.5rem;
  }

  #company {
    font-size: 1rem;
  }

  #location {
    font-size: 1rem;
  }

  #joined {
    font-size: 1rem;
  }

  #extra-info > .list-group-item {
    font-size: 1rem;
  }
}
</style>
