<template>
  <div class="container">
    <p class="title is-1 is-spaced">user: {{ $store.getters.getUserName }}</p>
    <button class="button is-primary is-rounded" @click="login">
      ログイン
    </button>
    <button class="button is-primary is-rounded" @click="loginC">
      ログインC
    </button>
  </div>
</template>

<script>
export default {
  methods: {
    login() {
      console.log('login')
      this.$store.dispatch('login')
    },
    loginC() {
      console.log('login')
      this.$store.dispatch('loginC')
    },
  },
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>
