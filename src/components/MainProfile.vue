<template>
  <main class="main-profile card">
    <div class="row">
      <div class="col-2">
        <img src="../assets/test-img.jpg" class="img-fluid" />
      </div>
      <div class="col-10">
        <div
          class="card-body h-100 d-flex flex-column justify-content-between align-items-between"
        >
          <section class="card-body-first-row">
            <h5 class="card-title mb-2" id="title">
              Username(name)
            </h5>
            <p class="card-text mb-1" id="company">
              Company
            </p>
            <p class="card-text mb-1" id="location">
              location
            </p>
          </section>
          <section class="card-body-second-row">
            <p class="card-subtitle mb-1 text-muted">
              Joined x years ago
            </p>
            <a href="#" class="card-link">Open Profile</a>
          </section>
        </div>
      </div>
    </div>
    <div class="card-footer">
      <ul class="list-group list-group-flush d-flex flex-row">
        <li class="list-group-item border-0" id="followers">
          Followers(100000)
        </li>
        <li class="list-group-item border-0" id="following">Following(0)</li>
        <li class="list-group-item border-0" id="public-repos">
          Public Repos(20)
        </li>
        <li class="list-group-item border-0" id="plan">Plan(Medium)</li>
      </ul>
    </div>
  </main>
</template>

<script>
export default {
  name: "MainProfile",
};
</script>

<style lang="scss"></style>
