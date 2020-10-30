<template>
  <div id="container" :style="{ height: wHeight }">
    <img src="@/assets/img/me/me002_1.png" id="item" />
    <div id="first">
      <v-textarea
        id="box"
        no-resize
        rows="5"
        outlined
        background-color="#f6f6f6"
        :value="sentence"
        readonly
        class="mt-5"
      >
      </v-textarea>
      <div id="checkBox">
        <v-checkbox
          v-model="checkbox1"
          color="primary"
          hide-details
          @click.prevent="oneTwoCheck"
        ></v-checkbox>
        <p>본 내용을 모두 숙지하였으며, <br />서비스 이용약관에 동의합니다.</p>
      </div>
      <v-textarea
        id="box"
        no-resize
        rows="5"
        outlined
        background-color="#f6f6f6"
        :value="sentence"
        readonly
        class="mt-5"
      >
      </v-textarea>
      <div id="checkBox">
        <v-checkbox
          v-model="checkbox2"
          color="primary"
          hide-details
          @click.prevent="oneTwoCheck"
        ></v-checkbox>
        <p>본 내용을 모두 숙지하였으며, <br />서비스 이용약관에 동의합니다.</p>
      </div>
    </div>
    <hr />
    <div id="bbox">
      <img
        src="@/assets/img/me/me002_2.png"
        id="last"
        v-show="next"
        @click.prevent="goNext"
      /><img src="@/assets/img/me/me002_3.png" id="last" v-show="!next" />
    </div>
  </div>
</template>

<style scoped src="@/assets/css/remove_css.css"></style>
<script src="@/assets/js/me/me002.js"></script>
<style scoped src="@/assets/css/me/me002.css"></style>
