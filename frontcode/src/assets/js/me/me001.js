import axios from "axios";

export default {
    data: () => ({
        valid: false,
        email: '',
        emailRules: [
            v => !!v || 'E-mail is required',
            v => /.+@.+/.test(v) || 'E-mail must be valid',
        ],
        password: "",
        confirmPassword: "",
        validPassword: "",
        rules: {
            passwordRules: v => !!v || "Password is required",
            confirmPasswordRules: v => !!v || "Password is required"
        },
        customer: [],
        loginCheck: false,
        user: {
            user_email: '',
            user_password: ''
        }

    }),
    computed: {
        wHeight() {
            let wHeight = window.innerHeight;
            return wHeight + 'px'
        },
        divHeight() {
            let divHeight = window.innerHeight;
            return divHeight / 10 + 'px'
        }
    },
    methods: {
        clickLogin(email, password) {

            axios
                .post("http://localhost:7777/login", {
                    params: {
                        email: email,
                        password: password
                    },
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })
                .then(response => {
                    this.customer = response.data;
                    console.log(response)
                })
                .catch(error => {
                    console.log(error);
                    this.loginCheck = true;
                    this.errored = true;
                })
                .finally(() => (this.loading = false));

            if (password != this.customer.password) {
                this.loginCheck = true
            }

        }
    },
}