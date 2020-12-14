export default {
  data() {
    return {
      studio: "",
      VRLink: "https://my.matterport.com/show/?m=cVA8ESKKouc",
    };
  },
  mounted() {
    if (JSON.parse(sessionStorage.getItem("studio")) != null) {
      this.studio = JSON.parse(sessionStorage.getItem("studio"));
    }
  },
  computed: {
    wHeight() {
      let wHeight = window.innerHeight;
      return wHeight + "px";
    },
  },
  methods: {
    goBack() {
      this.$router.push("/bo001");
    },
    showVR(i) {
      switch (i) {
        case 1:
          this.VRLink = "https://my.matterport.com/show/?m=cVA8ESKKouc&mls=1";
          break;
        case 2:
          this.VRLink = "https://my.matterport.com/show/?m=CRQdvvbXR76&mls=1";
          break;
        case 3:
          this.VRLink = "https://my.matterport.com/show/?m=riW2natWs9W&mls=1";
          break;
        case 4:
          this.VRLink = "https://my.matterport.com/show/?m=E74WWkd5R7K&mls=1";
          break;
        case 5:
          this.VRLink = "https://my.matterport.com/show/?m=dqMjU7ywEcb&mls=1";
          break;
        default:
          this.VRLink = "https://my.matterport.com/show/?m=cVA8ESKKouc&mls=1";
          break;
      }
    },
    goReserve() {
      this.loginCheckMethood();
    },
    loginCheckMethood() {
      console.log(this.$store.state.loginCheck);
      if (this.$store.state.loginCheck == false) {
        this.$router.push("/me001_1");
      } else {
        this.$router.push("/pa001/");
      }
    },
  },
};
