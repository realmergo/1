<template>
  <div id="app">
    <div id="nav" class="navbar navbar-expand-md navbar-light">
      <router-link to="/" class="navbar-brand">
        <img
          src="@/assets/tools.svg"
          height="40"
          class="d-inline-block align-top"
          alt=""
          loading="lazy"
        />
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarToggler"
          aria-controls="navbarToggler"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarToggler">
          <form id="search" class="navbar-form form-inline ml-auto">
            <input
              v-model="store.searchTerm"
              class="form-control mr-sm-2"
              type="search"
              placeholder="Pretraga"
              aria-label="Search"
            />
          </form>
          <ul class="navbar-nav ml-auto">
            <li v-if="!store.currentUser" class="nav-item">
              <router-link to="/login" class="nav-link">Login</router-link>
            </li>
            <li v-if="!store.currentUser" class="nav-item">
              <router-link to="/signup" class="nav-link">Sign up</router-link>
            </li>
            <li v-if="store.currentUser" class="nav-item">
              <a href="#" @click.prevent="logout()" class="nav-link">Logout</a>
            </li>
            <li v-if="store.currentUser" class="nav-item">
              <router-link to="/about" class="nav-link">My profile</router-link>
            </li>
          </ul>
        </div>
      </router-link>
    </div>
    <router-view />
  </div>
</template>

<script>
import store from "@/store";
import firebase from "firebase";
import router from "@/router";

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    console.log("+++", user.email);
    store.currentUser = user.email;
  } else {
    console.log("+++ No user");
    store.currentUser = null;

    if (router.name !== "login") {
      router.push({ name: "login" });
    }
  }
});

export default {
  name: "app",
  data() {
    return {
      store,
    };
  },
  methods: {
    logout() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.push({ name: "login" });
        });
    },
  },
};
</script>



<style lang="scss">
#app {
  background-image: url("./assets/login.jpg");
  background-size: cover;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
