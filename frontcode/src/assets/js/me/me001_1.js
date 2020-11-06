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
        clickLogin(email, password) {
            this.$axios
                .post("http://" + this.$store.state.ipAddress + ":7777/login", {
                    params: {
                        email: email,
                        password: password,
                    },
                    headers: {
                        "Content-Type": "application/json",
                    },
                })
                .then((response) => {
                    this.customer = response.data;
                    console.log(response);
                })
                .catch((error) => {
                    console.log(error);
                    this.errored = true;
                })
                .finally(() => {
                    this.userConfirm();
                    this.loading = false;
                });
        },
        userConfirm() {
            if (this.customer.email == "") {
                this.loginCheck = true;
            } else if (this.customer.email != this.email) {
                this.loginCheck = true;
            } else {
                if (this.password != this.customer.password) {
                    this.loginCheck = true;
                } else {
                    this.$store.commit("addUser", this.customer);
                    this.$router.push("/pa001");
                }
            }
        },
        register() {
            this.$router.push("/me002");
        },
        loginCheckMethood() {
            console.log(this.$store.state.loginCheck);
            if (this.$store.state.loginCheck == true) {
                this.$router.push("/pa001");
            }
        },
    },
};