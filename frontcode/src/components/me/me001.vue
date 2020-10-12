<template>
  <div id="container" :style="{ height: wHeight }">
    <div id="first">
      <img src="@/assets/img/main/Pics_logo.png" />
    </div>
    <hr />
    <div id="second">
      <v-text-field
        v-model="email"
        :rules="emailRules"
        label="E-mail"
        required
      ></v-text-field>
      <v-text-field
        label="Password"
        v-model="password"
        :rules="[rules.passwordRules]"
        type="password"
        required
      >
      </v-text-field>
    </div>
    <hr />
    <div id="third">
      <v-container>
        <v-row no-gutters>
          <p id="loginError" v-if="loginCheck">
            E-mail 또는 PW가 잘못되었습니다.
          </p>
          <v-col>
            <v-btn
              x-large
              color="primary"
              dark
              min-width="100%"
              @click.prevent="clickLogin(email, password)"
            >
              로그인할래요
            </v-btn>
            <br />
            <br />
            <v-btn id="register" x-large color="white" dark min-width="100%">
              회원가입할래요
            </v-btn>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>

<script src="@/assets/js/me/me001.js">
</script>
<style scoped src="@/assets/css/me/me001.css">
</style>