<template>
  <div id="app">
    <div class="popup"></div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.popup {
  width: 500px;
  height: 500px;
  background: red;
  position: absolute;
  left: 50%;
  top: 50%;

  /* 방법1 : margin-left:-너비/2 margin-top:-높이/
  2 *
  /* margin-left:-250px; margin-top:-250px; */
  transform: translate(-50%, -50%);
}
</style>
