export default {
    data() {
        return {
            sentence: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            checkbox1: false,
            checkbox2: false,
            next: false,
        };
    },
    computed: {
        wHeight() {
            let wHeight = window.innerHeight;
            return wHeight + "px";
        },
    },
    methods: {
        oneTwoCheck() {
            if (this.checkbox1 == true && this.checkbox2 == true) {
                this.next = true;
            } else {
                this.next = false;
            }
        },
        goNext() {
            this.$router.push("/me003");
        },
    },
};