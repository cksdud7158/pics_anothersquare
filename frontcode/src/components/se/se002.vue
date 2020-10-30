<template>
  <div id="container" :style="{ height: wHeight }">
    <img
      src="@/assets/img/se/ma002_ad.png"
      id="adImg"
      @click.prevent="toAdStudio"
    />
    <div
      id="studio"
      v-for="(studio, index) in studios"
      :key="index"
      @click.prevent="toStudio(studio.name)"
    >
      <div id="div_stuImg">
        <img id="stuImg" src="@/assets/img/studio/studio1.jpg" />
      </div>
      <div id="div_stuInfo">
        <h1>{{ studio.name }}</h1>
        <span>{{ studio.address }}</span>
        <span>#{{ studio.tag1 }}#{{ studio.tag2 }}#{{ studio.tag3 }}</span>
      </div>
    </div>
  </div>
</template>

<script src="@/assets/js/se/se002.js" />
<style scoped src="@/assets/css/se/se002.css" />
