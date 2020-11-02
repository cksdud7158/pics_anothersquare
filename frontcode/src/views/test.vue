<template>
  <div id="app">
    <v-app id="inspire">
      <v-text-field
        v-model="name"
        :counter="10"
        :rules="[checkDuplicate, rules.required]"
        label="Name"
        required
      ></v-text-field>
    </v-app>
  </div>
</template>

<script>
export default {
  data: () => ({
    name: "",
    rules: {
      required: (v) => !!v || "this field is required",
    },
  }),
  methods: {
    checkDuplicate(val) {
      // write your api call and return the below statement if it already exist
      if (val == "test") {
        return `Name "${val}" already exist`;
      } else {
        return true;
      }
    },
  },
};
</script>
