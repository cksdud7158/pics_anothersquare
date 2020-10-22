<template>
  <div id="container" :style="{ height: wHeight }">
    <div id="first">
      <h1>{{ studio.name }}</h1>
      <h1 @click.prevent="toPa001">조건수정</h1>
    </div>
    <h1 id="addr">{{ studio.address }}</h1>
    <div id="second">
      <p>인원</p>
      <p>{{ paymentInformation.peopleNum }}명</p>
      <p>날짜</p>
      <p>{{ paymentInformation.dateInfo }}</p>
      <p>시간</p>
      <div>
        <span v-for="(item, i) in paymentInformation.selectedTime" :key="i"
          >{{ item }},&nbsp;
        </span>
      </div>
    </div>
    <div id="device">
      <p>임대 신청 장비 리스트</p>
      <div>
        <span v-for="(item, i) in paymentInformation.selectedDevice" :key="i"
          >{{ item }},&nbsp;</span
        >
      </div>
    </div>
    <hr />
    <p id="payment">결제 수단</p>
    <div id="third">
      <img
        src="@/assets/img/pa/pa002_1.png"
        v-show="!payment1"
        @click.prevent="checkBtn1"
      /><img
        src="@/assets/img/pa/pa002_1_1.png"
        v-show="payment1"
        @click.prevent="checkBtn1"
      />
      <img
        src="@/assets/img/pa/pa002_2.png"
        v-show="!payment2"
        @click.prevent="checkBtn2"
      /><img
        src="@/assets/img/pa/pa002_2_1.png"
        v-show="payment2"
        @click.prevent="checkBtn2"
      />
      <img
        src="@/assets/img/pa/pa002_3.png"
        v-show="!payment3"
        @click.prevent="checkBtn3"
      /><img
        src="@/assets/img/pa/pa002_3_1.png"
        v-show="payment3"
        @click.prevent="checkBtn3"
      />
      <img
        src="@/assets/img/pa/pa002_4.png"
        v-show="!payment4"
        @click.prevent="checkBtn4"
      /><img
        src="@/assets/img/pa/pa002_4_1.png"
        v-show="payment4"
        @click.prevent="checkBtn4"
      />
    </div>
    <div id="forth">
      <p>최종 결제 금액</p>
      <p>공간대여비</p>
      <p>{{ placePrice | currency }} 원</p>
      <p>장비대여비</p>
      <p>{{ devicePrice | currency }} 원</p>
    </div>
    <hr />
    <div id="totalPrice">
      <p>총액</p>
      <p>{{ totalPrice | currency }} 원</p>
    </div>
    <div id="paymentBtn">
      <img src="@/assets/img/pa/pa002_5.png" @click.prevent="toPay">
    </div>
  </div>
</template>

<style scoped src="@/assets/css/remove_css.css"></style>
<script src="@/assets/js/pa/pa002.js" />
<style scoped src="@/assets/css/pa/pa002.css" />
