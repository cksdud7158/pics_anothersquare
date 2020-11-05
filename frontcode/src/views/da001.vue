<template>
  <div id="container" :style="{ height: wHeight }">
    <div id="first">
      <div id="logoImg">
        <img src="@/assets/img/da/da001_1.png" id="logo" />
      </div>
      <h1 id="toph1">
        Pics 서비스를 이용하시기전에 <br />반드시
        <span>위치정보이용약관</span>의 <br /><span>동의</span>를 부탁드립니다.
      </h1>
      <div id="textarea">
        <v-textarea
          id="box"
          no-resize
          rows="10"
          outlined
          background-color="#f6f6f6"
          :value="sentence"
          readonly
          class="mt-5"
        >
        </v-textarea>
      </div>

      <p id="botP">
        본 내용을 모두 숙지하였으며, <br /><span>위치정보이용약관</span>에
        <span>동의</span>합니다.
      </p>
      <div id="third">
        <img
          src="@/assets/img/da/da001_2.png"
          id="logo2"
          @click.prevent="agree"
        />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      sentence:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      firstCheck: localStorage.getItem("firstCheck"),
    };
  },
  beforeMount() {
    console.log();
    this.checkTrue();
  },
  computed: {
    wHeight() {
      let wHeight = window.innerHeight;
      return wHeight + "px";
    },
  },
  methods: {
    agree() {
      localStorage.setItem("firstCheck", true);
      this.$router.push("/home");
    },
    checkTrue() {
      if (this.firstCheck == "true") {
        this.$router.push("/home");
      }
    },
  },
};
</script>
<style scoped src="@/assets/css/remove_css.css"></style>

<style scoped>
#container {
  background-color: #33a3dc;
  display: grid;
  justify-items: center;
  align-items: center;
}

#first {
  background-color: #fff;
  width: 95%;
  height: 95%;
}

#logoImg {
  display: grid;
  justify-items: center;
  align-items: center;
  margin-top: 10%;
}

#logo {
  width: 25%;
}

#toph1 {
  text-align: center;
  margin-top: 10%;
}

#toph1 > span {
  font-weight: 700;
}

#textarea {
  width: 80%;
  margin: 0 auto;
}

#logo2 {
  width: 50%;
}

#botP {
  text-align: center;
  font-size: 0.8rem;
}
#botP > span {
  font-weight: 600;
}

#third {
  display: grid;
  justify-items: center;
  margin-top: 5%;
}
</style>
