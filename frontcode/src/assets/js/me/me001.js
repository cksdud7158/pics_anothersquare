export default {
  data: () => ({
    valid: false,
    email: "",
    emailRules: [
      (v) => !!v || "E-mail is required",
      (v) => /.+@.+/.test(v) || "E-mail must be valid",
    ],
    password: "",
    confirmPassword: "",
    validPassword: "",
    rules: {
      passwordRules: (v) => !!v || "Password is required",
      confirmPasswordRules: (v) => !!v || "Password is required",
    },
    customer: "",
    loginCheck: false,
    user: {
      user_email: "",
      user_password: "",
    },
  }),
  mounted() {
    this.loginCheckMethood();
  },
  computed: {
    wHeight() {
      let wHeight = window.innerHeight;
      return wHeight + "px";
    },
    divHeight() {
      let divHeight = window.innerHeight;
      return divHeight / 10 + "px";
    },
  },
  methods: {
    loginEnter(email, password) {
      this.clickLogin(email, password);
    },
    async clickLogin(email, password) {
      var sn = await this.$axios.post(
        "http://" + this.$store.state.ipAddress + ":7777/login",
        {
          params: {
            email: email,
          },
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      this.customer = sn.data;
      this.userConfirm(password);
    },
    userConfirm(password) {
      if (password == this.customer.password) {
        this.$store.commit("addUser", this.customer);
        this.$router.push("/me005");
      } else {
        this.loginCheck = true;
      }
    },
    register() {
      this.$router.push("/me002");
    },
    loginCheckMethood() {
      console.log(this.$store.state.loginCheck);
      if (this.$store.state.loginCheck == true) {
        this.$router.push("/me005");
      }
    },
  },
};
