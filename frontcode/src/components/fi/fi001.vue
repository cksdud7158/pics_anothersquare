<template>
  <div id="container" :style="{ height: wHeight }">
    <img
      src="@/assets/img/main/ma002_ad.png"
      id="adImg"
      @click.prevent="toAdStudio"
    />
    <div id="first">
      <img src="@/assets/img/studio/studio1.jpg" />
      <span id="tag"
        >#{{ studio.tag1 }} #{{ studio.tag2 }} #{{ studio.tag3 }}</span
      >
    </div>
    <div id="second">
      <h1>{{ studio.name }}</h1>
      <p>{{ studio.address }}</p>
      <span>시간당</span>
      <div>
        <span>{{ studio.price }}</span> <span>원부터</span>
      </div>
    </div>
    <hr />
    <div id="third">
      <div class="item">
        <img src="@/assets/img/fi/fi001_icon_calender.png" />
        <span>예약 가능 : 평일/ 휴무 : 주말, 공휴일</span>
      </div>
      <div class="item">
        <img src="@/assets/img/fi/fi001_icon_parking.png" />
        <span v-if="parkingCheck"> 주차 가능 : 3시간 무료 </span>
        <span v-if="!parkingCheck"> 주차 불가 </span>
      </div>
      <div id="forVR">
        <div class="item">
          <img src="@/assets/img/fi/fi001_icon_tool.png" />
          <span> 조명 대여 가능 </span>
        </div>
        <div id="vrBtn">
          <img src="@/assets/img/fi/fi001_button.png" @click.prevent="toVR" />
        </div>
        <div class="item">
          <img src="@/assets/img/fi/fi001_icon_place.png" />
          <span>
            {{ studio.area }}m<sup>2</sup>/ {{ studio.capacityPeople }}명 수용
            가능</span
          >
        </div>
      </div>
    </div>
    <div id="forth">
      <img src="@/assets/img/fi/fi001_reserve.png" @click.prevent="toReserve" />
    </div>
  </div>
</template>


<script src="@/assets/js/fi/fi001.js"/>
<style scoped src="@/assets/css/fi/fi001.css" />

