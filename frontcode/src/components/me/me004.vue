<template>
  <div id="container" :style="{ height: wHeight }">
    <h1>
      회원 가입이<br />
      완료되었습니다.
    </h1>
    <h1>
      로그인 후, <br />
      Pics의 모든 서비스를 <br />
      자유롭게 이용하실 수 있습니다.
    </h1>
    <div id="img">
      <img src="@/assets/img/me/me004_1.png" @click.prevent="next" />
    </div>
  </div>
</template>

<style scoped src="@/assets/css/remove_css.css"></style>
<script src="@/assets/js/me/me004.js"></script>
<style scoped src="@/assets/css/me/me004.css"></style>
