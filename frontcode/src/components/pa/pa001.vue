<template>
  <div id="container" :style="{ height: wHeight }">
    <img
      src="@/assets/img/main/ma002_ad.png"
      id="adImg"
      @click.prevent="toAdStudio"
    />
    <div id="first">
      <h1>{{ studio.name }}</h1>
      <p>{{ studio.address }}</p>
      <Spo003 id="spo003" :address="studio.address" />
    </div>
    <hr />
    <div id="second">
      <img src="@/assets/img/pa/pa001_icon_people.png" />
      <div>
        <span>촬영인원</span>(보조인원까지 기재, 필수) <input type="text" />명
      </div>
      <img src="@/assets/img/pa/pa001_icon_calender.png" />
      <div><span>촬영날짜</span>(필수)</div>
      <img src="@/assets/img/pa/pa001_icon_time.png" />
      <div>
        <span>촬영시간</span>(24시간 표기, 필수) <input type="text" />시 ~
        <input type="text" />시
      </div>
      <img src="@/assets/img/pa/pa001_icon_tool.png" />
      <div>
        <span>장비 대여 신청</span> 없을시 미기재
        <div>선택한 장비 내역이 들어갈 곳</div>
      </div>
      <img src="@/assets/img/pa/pa001_icon_memo.png" />
      <div><span>촬영 목적 한 줄 메모</span></div>
    </div>
  </div>
</template>

<style scoped src="@/assets/css/remove_css.css">
</style>
<script src="@/assets/js/pa/pa001.js"/>
<style scoped src="@/assets/css/pa/pa001.css" />

