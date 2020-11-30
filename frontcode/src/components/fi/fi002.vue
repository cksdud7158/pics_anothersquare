<template>
  <div id="container" :style="{ height: wHeight }">
    <div id="first">
      <div id="back" @click.prevent="goBack">
        <img src="@/assets/img/bo/bo001_1.png" alt="" />
        <p>돌아가기</p>
      </div>
      <h1>상세정보</h1>
    </div>
    <hr />
    <v-card class="ml-4" flat>
      <v-card-title class="text-h4 mt-2">
        <p>{{ studio.name }}</p>
      </v-card-title>
      <v-card-text class="text-body-1 my-1 font-weight-medium">
        <p>{{ studio.address }}</p>
      </v-card-text>
    </v-card>
    <iframe
      id="iframe"
      :src="VRLink"
      frameborder="0"
      allowfullscreen
      allow="xr-spatial-tracking"
    ></iframe>

    <div id="third">
      <img src="@/assets/img/fi/fi002_10.png" @click="showVR(1)" />
      <img src="@/assets/img/fi/fi002_12.png" @click="showVR(2)" />
      <img src="@/assets/img/fi/fi002_14.png" @click="showVR(3)" />
      <img src="@/assets/img/fi/fi002_16.png" @click="showVR(4)" />
      <img src="@/assets/img/fi/fi002_18.png" @click="showVR(5)" />
    </div>
    <div id="forth">
      <img src="@/assets/img/fi/fi002_1.png" @click="goReserve" />
    </div>
  </div>
</template>

<style scoped src="@/assets/css/remove_css.css"></style>
<script src="@/assets/js/fi/fi002.js" />
<style scoped src="@/assets/css/fi/fi002.css" />
