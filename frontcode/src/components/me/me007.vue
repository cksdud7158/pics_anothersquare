<template>
  <div id="container" :style="{ height: wHeight }">
    <div id="first">
      <div id="back" @click.prevent="goBack">
        <img src="@/assets/img/bo/bo001_1.png" alt="" />
        <p>돌아가기</p>
      </div>
      <h1>후기 쓰기</h1>
    </div>
    <hr />

    <div id="second">
      <div id="backImg">
        <div id="backColor">
          <div id="content">
            <p>{{ studioInfo.date }}</p>
            <p>{{ studioInfo.name }}</p>
            <br />
            <br />
            <p>결제 금액</p>
            <p>
              <span>{{ studioInfo.price | currency }}</span
              >원
            </p>
          </div>
        </div>
      </div>
    </div>
    <div id="third">
      <h1>별점을 평가해주세요</h1>
      <v-rating
        v-model="rating"
        background-color="orange lighten-3"
        color="orange"
        large
      ></v-rating>
    </div>
    <hr id="hrSecond" />
    <div id="forth">
      <h1>하고싶은 말 적는 곳</h1>
      <v-textarea
        solo
        rows="10"
        row-height="15"
        auto-grow
        v-model="review"
      ></v-textarea>
      <img src="@/assets/img/me/me007_1.png" id="next" @click.prevent="next" />
    </div>
  </div>
</template>

<style scoped src="@/assets/css/remove_css.css"></style>
<script src="@/assets/js/me/me007.js"></script>
<style scoped src="@/assets/css/me/me007.css"></style>
