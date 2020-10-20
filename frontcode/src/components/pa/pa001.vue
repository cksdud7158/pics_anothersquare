<template>
  <div id="container" :style="{ height: wHeight }">
    <img
      src="@/assets/img/main/ma002_ad.png"
      id="adImg"
      @click.prevent="toAdStudio"
    />
    <div id="first">
      <!-- <h1>{{ studio.name }}</h1> -->
      <h1>
        홍대예셰 뮤직 <br />
        합주실 연습실
      </h1>
      <p>{{ studio.address }}</p>
      <Spo003 id="spo003" :address="studio.address" />
    </div>
    <hr />
    <div id="second">
      <img src="@/assets/img/pa/pa001_icon_people.png" />
      <v-text-field
        placeholder="촬영 인원 입력 "
        suffix="명"
        class="pt-4"
      ></v-text-field>
      <img src="@/assets/img/pa/pa001_icon_calender.png" />
      <div>
        <!-- 날짜 선택 -->
        <input type="date" v-model="dateInfo" :onchange="handler()" />
      </div>
      <img src="@/assets/img/pa/pa001_icon_time.png" />
      <div>
        <!-- 시간 선택 -->
        <select v-for="{item, i } in possibleReserve" :key="i">
          <option value="item">{{item}}</option>
        </select>
      </div>
      <img src="@/assets/img/pa/pa001_icon_tool.png" />
      <div>
        <span>장비 대여 신청</span> 없을시 미기재
        <div>선택한 장비 내역이 들어갈 곳</div>
      </div>
    </div>
    <div id="temp"><h1>test</h1></div>
  </div>
</template>

<style scoped src="@/assets/css/remove_css.css"></style>
<script src="@/assets/js/pa/pa001.js" />
<style scoped src="@/assets/css/pa/pa001.css" />
