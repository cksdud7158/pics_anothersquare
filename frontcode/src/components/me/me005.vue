<template>
  <div id="container" :style="{ height: wHeight }">
    <div id="name">
      <div id="name1">{{ user.name }} 님</div>
    </div>
    <div id="img">
      <img src="@/assets/img/me/me005_2.png" alt="" @click.prevent="next1" />
      <img src="@/assets/img/me/me005_1.png" alt="" @click.prevent="next2" />
    </div>
  </div>
</template>

<style scoped src="@/assets/css/remove_css.css"></style>
<script src="@/assets/js/me/me005.js"></script>
<style scoped src="@/assets/css/me/me005.css"></style>
