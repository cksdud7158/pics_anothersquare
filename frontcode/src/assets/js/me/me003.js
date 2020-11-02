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
    },
};