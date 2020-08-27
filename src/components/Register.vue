<template>
  <div class="register">
    <h2>Register 新規登録</h2>
    <input type="text" placeholder="Username" v-model="username" />
    <input type="text" placeholder="password" v-model="password" />
    <button @click="register">Register</button>
    <p>
      Do you have an account?
      <router-link to="/signin">sign in</router-link>
    </p>
  </div>
</template>

<script>
import firebase from "firebase";

export default {
  name: "register",
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    register: function () {
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.username, this.password)
        .then((user) => {
          alert("Create account: ", user.email);
        })
        .catch((error) => {
          alert(error.message);
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
.register {
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