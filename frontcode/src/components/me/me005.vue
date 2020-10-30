<template>
  <div id="container" :style="{ height: wHeight }">
    <h1>me005</h1>
    {{ user.email }}
    <v-btn @click.prevent="test">test</v-btn>
  </div>
</template>

<style scoped src="@/assets/css/remove_css.css"></style>
<script src="@/assets/js/me/me005.js"></script>
<style scoped src="@/assets/css/me/me005.css"></style>
