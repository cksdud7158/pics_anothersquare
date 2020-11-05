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
    <img id="studioImg" src="@/assets/img/studio/studio1.jpg" />
    <div id="second">
      <h1>{{ studioInfo.name }}</h1>
      <hr />
      <div>
        <p id="grid">
          <span id="title">주 소 지 : </span>
          <span>{{ studioInfo.address }}</span>
        </p>
        <p id="grid">
          <span id="title">연 락 처 : </span>
          <span>{{ studioInfo.contact }}</span>
        </p>
        <p id="grid">
          <span id="title">촬영인원 : </span>
          <span>{{ studioInfo.peopleNum }}명</span>
        </p>
        <p id="grid">
          <span id="title">촬영날짜 : </span>
          <span>{{ studioInfo.date | filterDate }}</span>
        </p>
        <p>
          <span id="title">임대장비 : </span>
          <span>{{ studioInfo.device }}</span>
        </p>
      </div>
      <div id="price">
        <p>최종 결제 금액</p>
        <p>
          <span>{{ studioInfo.price | currency }}</span
          >원
        </p>
      </div>
    </div>
    <div id="cancel">
      <img src="@/assets/img/bo/bo002_1.png" @click.prevent="reserveCancel" />
    </div>
  </div>
</template>

<style scoped src="@/assets/css/remove_css.css"></style>
<script src="@/assets/js/bo/bo002.js" />
<style scoped src="@/assets/css/bo/bo002.css" />
