export default {
    data() {
        return {
            checkbox1: false,
            checkbox2: false,
            email: "",
            emailRules: {
                required: (v) => !!v || "E-mail is required",
                form: (v) => /.+@.+/.test(v) || "E-mail must be valid",
            },
            password: "",
            show1: false,
            rules: {
                required: (value) => !!value || "Required.",
                min: (v) => v.length >= 8 || "Min 8 characters",
            },
            name: "",
            contact: "",
            allCheck: false,
        };
    },
    updated() {
        if (
            this.email != "" &&
            this.password != "" &&
            this.name != "" &&
            this.contact != "" &&
            (this.checkbox1 == true || this.checkbox2 == true)
        ) {
            this.allCheck = true;
        }
    },
    computed: {
        wHeight() {
            let wHeight = window.innerHeight;
            return wHeight + "px";
        },
    },
    methods: {
        checkDuplicate(val) {
            // write your api call and return the below statement if it already exist
            if (val == "test") {
                return `Name "${val}" already exist`;
            } else {
                return true;
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
    },
};