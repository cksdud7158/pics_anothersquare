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
        @click:append="search"
        @keyup.enter="enterClicked"
        v-model="condition.searchWord"
      ></v-text-field>
      <hr />
    </div>
    <div id="first">
      <p>예약가능날짜 조건 추가</p>
      <div id="item">
        <img src="@/assets/img/se/se001_icon_calender.png" />
        <div id="calender">
          <input type="date" v-model="condition.reserveDate1" id="datePicke" />
          <div>~</div>
          <input type="date" v-model="condition.reserveDate2" id="datePicke" />
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
      <p>장소규모 조건 추가</p>
      <div id="item">
        <img src="@/assets/img/se/se001_icon_place.png" />
        <div id="place">
          <div id="text">
            <input type="text" v-model="condition.area1" /> m<sup>2</sup>이상
          </div>
          <div id="text">
            <input type="text" v-model="condition.area2" /> m<sup>2</sup>이하
          </div>
          <img
            src="@/assets/img/se/se001_2.png"
            @click.prevent="clickOutdoor()"
            v-show="!condition.clickOutdoorStatus"
          />
          <img
            src="@/assets/img/se/se001_2_1.png"
            @click.prevent="clickOutdoor()"
            v-show="condition.clickOutdoorStatus"
          />
        </div>
      </div>
      <p>공간임대가격 조건 추가</p>
      <div id="item">
        <img src="@/assets/img/se/se001_icon_price.png" />
        <div id="price">
          <div id="text">
            <input type="text" v-model="condition.price1" /> 원 이상
          </div>
          <div id="text">
            <input type="text" v-model="condition.price2" /> 원 이하
          </div>
        </div>
      </div>
      <p>촬영인원규모 조건 추가</p>
      <div id="item">
        <img src="@/assets/img/se/se001_icon_people.png" />
        <div id="people">
          수용 가능 촬영인원<input
            type="text"
            v-model="condition.peopleNum"
          />명
        </div>
      </div>
      <p>해시태그 조건 추가</p>
      <textarea
        v-model="condition.hashTag"
        cols="40"
        rows="3"
        placeholder="#을 단어 앞에 넣어주세요 ex)#루프탑 #분위기좋은"
      ></textarea>
    </div>
  </div>
</template>
<style scoped src="@/assets/css/remove_css.css"></style>
<script src="@/assets/js/se/se001.js" />
<style scoped src="@/assets/css/se/se001.css" />
