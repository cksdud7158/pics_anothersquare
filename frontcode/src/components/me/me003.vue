<template>
  <div id="container" :style="{ height: wHeight }">
    <h1 id="register">회원가입</h1>
    <hr />
    <div id="first">
      <div id="email">
        <div>
          <p>ID: E-Mail</p>
          <p v-if="false">중복되었거나, 잘못된 이메일 주소입니다.</p>
        </div>
        <div>
          <input type="text" id="textEmail" />
          <input type="button" value="중복확인" id="checkDup" />
        </div>
      </div>
      <div id="password">
        <p>PW: 영문 + 숫자 5~10 자리 내외</p>
        <input type="text" />
        <input type="text" />
        <p>다시입력해주세요</p>
      </div>
      <div id="nameGender">
        <div id="name">
          <p>이름</p>
          <input type="text" />
        </div>
        <div>
          <p>성별</p>
          <div id="gender">
            <v-checkbox
              v-model="checkbox1"
              color="primary"
              hide-details
              id="temp"
              ><template v-slot:label>
                <div style="font-size:1rem; margin-right:5px">
                  남자
                </div>
              </template></v-checkbox
            >
            <v-checkbox v-model="checkbox2" color="primary" hide-details
              ><template v-slot:label>
                <div style="font-size:1rem; margin-right:5px">
                  여자
                </div>
              </template></v-checkbox
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped src="@/assets/css/remove_css.css"></style>
<script src="@/assets/js/me/me003.js"></script>
<style scoped src="@/assets/css/me/me003.css"></style>
