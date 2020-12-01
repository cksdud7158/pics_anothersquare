<template>
  <div>
    <v-btn color="success" @click.prevent="test">text</v-btn>
    <v-btn @click.prevent="test2">text</v-btn>
  </div>
</template>

<script>
export default {
  methods: {
    async test() {
      var sn = await this.$axios.post("http://localhost" + ":7777/login", {
        params: {
          email: "yoonqoo2@gmail.com",
          // email: "11@test.com",
        },
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log(sn);
    },
  },
};
</script>
