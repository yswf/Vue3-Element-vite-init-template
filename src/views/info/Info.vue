<template>
  <div class="info">
    <h1>这里是Personal Information页面</h1>
    <strong>user:</strong>
    <p>{{ userdata.username }}</p>
    <strong>email:</strong>
    <p>{{ userdata.email }}</p>
    <strong>mobile:</strong>
    <p>{{ userdata.mobile }}</p>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {},
  computed: {
    userdata() {
      console.log(this.$store.state.user.userInfo);
      return this.$store.state.user.userInfo;
    },
  },
};
</script>
