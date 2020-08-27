<template>
  <div class="signin">
    <div class="mt-2" v-if="showError">
      <p>{{ errorMessage }}</p>
    </div>
    <h2>Sign in</h2>
    <input type="text" placeholder="Username" v-model="username" />
    <input type="text" placeholder="password" v-model="password" />
    <button @click="signIn">Signin</button>
    <hr />
    <div class="mt-2">
      <button block variant="primary" @click="googleLogin">Google ログイン</button>
    </div>
    <p>
      You don't have an acctoun?
      <router-link to="/register">create account</router-link>
    </p>
  </div>
</template>

<script>
import firebase from "firebase";

export default {
  name: "Signin",
  data() {
    return {
      username: "",
      password: "",
      errorMessage: "",
      showError: false,
    };
  },
  methods: {
    signIn() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.username, this.password)
        .then(
          (user) => {
            alert("Success:" + user);
            this.$router.push("/");
          },
          (err) => {
            alert(err.message);
          }
        );
    },
    googleLogin() {
      const provider = new firebase.auth.GoogleAuthProvider();
      firebase
        .auth()
        .signInWithPopup(provider)
        .then((result) => {
          console.trace(result.user);
          this.$router.push("/");
        })
        .catch((error) => {
          console.debug(error);
          this.errorMessage = error.message;
          this.showError = true;
        });
    },
  },
};
</script>

<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.signin {
  margin-top: 20px;

  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
}
input {
  margin: 10px 0;
  padding: 10px;
}
</style>