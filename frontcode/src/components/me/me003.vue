<template>
  <div id="container" :style="{ height: wHeight }">
    <h1 id="register">회원가입</h1>
    <hr />
    <div id="first">
      <div id="email">
        <v-text-field
          v-model="email"
          :rules="[checkDuplicate, required, emailForm]"
          label="E-mail"
        ></v-text-field>
      </div>
      <div id="password">
        <v-text-field
          v-model="password"
          :type="show1 ? 'text' : 'password'"
          :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
          label="password"
          counter
          @click:append="show1 = !show1"
          :rules="[required, minimumNum]"
          hint="At least 8 characters"
        ></v-text-field>
      </div>
      <div id="name">
        <v-text-field v-model="name" label="name" counter></v-text-field>
      </div>
      <div id="contact">
        <v-text-field
          v-model="contact"
          label="contact"
          counter
          append-icon="mdi-cellphone"
          :rules="[required]"
        ></v-text-field>
      </div>
      <div id="gender">
        <p>성별</p>
        <div id="checkbox">
          <v-checkbox v-model="checkbox1" color="primary" hide-details id="temp"
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
    <hr />
    <div id="next">
      <img
        src="@/assets/img/me/me003_1.png"
        v-if="allCheck"
        @click.prevent="next"
      />
      <img src="@/assets/img/me/me003_2.png" v-if="!allCheck" />
    </div>
  </div>
</template>

<style scoped src="@/assets/css/remove_css.css"></style>
<script src="@/assets/js/me/me003.js"></script>
<style scoped src="@/assets/css/me/me003.css"></style>
