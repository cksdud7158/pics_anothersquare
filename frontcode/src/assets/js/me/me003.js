export default {
    data() {
        return {
            checkbox1: false,
            checkbox2: false,
            checkbox: false,
        };
    },
    computed: {
        wHeight() {
            let wHeight = window.innerHeight;
            return wHeight + "px";
        },
    },
    methods: {},
};