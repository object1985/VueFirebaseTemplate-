<template>
  <div class="hello">
    <h1>Hello {{name}}</h1>
    <v-btn @click="signOut">Sign out</v-btn>
  </div>
</template>

<script>
import firebase from "firebase";

export default {
  name: "HelloWorld",
  data() {
    return {
      name: firebase.auth().currentUser.email,
    };
  },
  methods: {
    signOut: function () {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.push("/signin");
        });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
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
</style>
