<template>
  <div id="container" :style="{ height: wHeight }">
    <div id="banner">
      <div>
        <p>지금 바로 나한테 딱 맞는</p>
        <p>촬영공간 찾기</p>
      </div>
    </div>
    <div id="search">
      <v-text-field
        label="검색어를 입력해주세요 "
        outlined
        dense
        append-icon="mdi-magnify"
        autofocus
        full-width
      ></v-text-field>
      <hr />
    </div>
    <div id="first">
      <p>예약가능날짜 조건 추가</p>
      <div id="item">
        <img src="@/assets/img/se/se001_icon_calender.png" />
        <div id="calender">
          <input type="date" v-model="reserveDate1" id="datePicke" />
          <div>~</div>
          <input type="date" v-model="reserveDate2" id="datePicke" />
        </div>
      </div>
      <p>지역위치 조건 추가</p>
      <div id="item">
        <img src="@/assets/img/se/se001_icon_gps.png" />
        <div id="map">
          <select v-model="selectCity" id="selectId">
            <option v-for="(item, index) in citys" :value="item" :key="index">
              {{ item.city }}
            </option> </select
          >시도
          <select v-model="selectDistrict" id="selectId">
            <option
              v-for="(item, i) in selectCity.district"
              :value="item"
              :key="i"
            >
              {{ item }}
            </option> </select
          >시군구
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped src="@/assets/css/remove_css.css"></style>
<script src="@/assets/js/se/se001.js" />
<style scoped src="@/assets/css/se/se001.css" />
