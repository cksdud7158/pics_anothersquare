<template>
  <div id="container" :style="{ height: wHeight }">
    <div id="first">
      <div id="back" @click.prevent="goBack">
        <img src="@/assets/img/bo/bo001_1.png" alt="" />
        <p>돌아가기</p>
      </div>
      <h1>예약목록 확인하기</h1>
    </div>
    <hr />
    <div id="second" v-for="(item, index) in reserveStudios" :key="index">
      <div id="name">
        <h1 id="mat">{{ item.name }}</h1>
        <h1 id="mat">{{ item.date | dateFilter }}</h1>
      </div>
      <div id="price">
        {{ item.price | currency }}원
        <img
          src="@/assets/img/bo/bo001_2.png"
          @click.prevent="ShowDetail(index)"
        />
      </div>
    </div>
  </div>
</template>

<style scoped src="@/assets/css/remove_css.css"></style>
<script src="@/assets/js/bo/bo001.js" />
<style scoped src="@/assets/css/bo/bo001.css" />
