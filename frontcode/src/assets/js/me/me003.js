export default {
    data() {
        return {
            checkbox1: false,
            checkbox2: false,
            email: "",
            password: "",
            show1: false,
            name: "",
            contact: "",
            allCheck: false,
            length: "",
            emails: "",
        };
    },
    mounted() {
        this.$axios
            .get("http://" + this.$store.state.ipAddress + ":7777/register")
            .then((response) => {
                this.emails = response.data;
                console.log(response);
            })
            .catch((error) => {
                console.log(error);
                this.errored = true;
            })
            .finally(() => {
                this.loading = false;
            });
    },
    updated() {
        if (
            this.email != "" &&
            this.password != "" &&
            this.name != "" &&
            this.contact != "" &&
            this.required() == true &&
            this.emailForm() == true &&
            this.minimumNum() == true &&
            this.checkboxReturn() &&
            this.checkDuplicate() == true
        ) {
            this.allCheck = true;
        } else {
            this.allCheck = false;
        }
    },
    computed: {
        wHeight() {
            let wHeight = window.innerHeight;
            return wHeight + "px";
        },
    },
    methods: {
        checkDuplicate() {
            for (let i in this.emails) {
                if (this.email == this.emails[i]) {
                    return "Name already exist";
                } else {
                    return true;
                }
            }
        },
        next() {
            var registerInfo = {};
            registerInfo.email = this.email;
            registerInfo.name = this.name;
            registerInfo.password = this.password;
            registerInfo.contact = this.contact;
            if (this.checkbox1 == true) {
                registerInfo.gender = "M";
            } else {
                registerInfo.gender = "W";
            }
            this.$axios
                .post("http://" + this.$store.state.ipAddress + ":7777/register", {
                    params: {
                        registerInfo: registerInfo,
                    },
                    headers: {
                        "Content-Type": "application/json",
                    },
                })
                .then((response) => {
                    this.$router.push("/me004");
                    console.log(response);
                })
                .catch((error) => {
                    console.log(error);
                    this.errored = true;
                })
                .finally(() => {
                    this.loading = false;
                });
        },
        required() {
            if (this.email == "") {
                return "필수 입력 항목입니다.";
            } else {
                return true;
            }
        },
        emailForm() {
            if (/.+@.+/.test(this.email)) {
                console.log("형식 맞음");
                return true;
            } else {
                return "형식이 맞지않습니다.";
            }
        },
        minimumNum() {
            if (this.password.length >= 8) {
                return true;
            } else {
                return "8자리 이상 입력해주세요";
            }
        },
        checkboxReturn() {
            if (this.checkbox1 == true && this.checkbox2 == false) {
                return true;
            } else if (this.checkbox1 == false && this.checkbox2 == true) {
                return true;
            } else if (this.checkbox1 == true && this.checkbox2 == true) {
                return false;
            }
        },
    },
};