<template>
  <div id="container" :style="{ height: wHeight }">
    <div id="first">
      <h1>{{ studio.name }}</h1>
      <h1>조건수정</h1>
    </div>
    <h1 id="addr">{{studio.address}}</h1>
    <div id="second">
        <p>인원</p><p>{{paymentInformation.peopleNum}}명</p>
        <p>날짜</p><p>{{paymentInformation.dateInfo}}</p>
        <p>시간</p><p>{{paymentInformation.selectedTime}}</p>
        <p>대여 장비</p><p>{{paymentInformation.selectedDevice}}</p>
    </div>
  </div>
</template>

<style scoped src="@/assets/css/remove_css.css"></style>
<script src="@/assets/js/pa/pa002.js" />
<style scoped src="@/assets/css/pa/pa002.css" />
