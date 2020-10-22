<template>
  <div id="container" :style="{ height: wHeight }">
    <h1>결제가 완료되었습니다!</h1>
    <div id="btn">
      <img src="@/assets/img/pa/pa003_2.png" @click.prevent="toReserveList" />
      <br />
      <img src="@/assets/img/pa/pa003_1.png" @click.prevent="toSearch" />
    </div>
  </div>
</template>

<style scoped src="@/assets/css/remove_css.css"></style>
<script src="@/assets/js/pa/pa003.js" />
<style scoped src="@/assets/css/pa/pa003.css" />
