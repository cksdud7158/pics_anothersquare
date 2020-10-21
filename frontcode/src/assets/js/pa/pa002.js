export default {
    data() {
        return {
            studio: '',
            paymentInformation: '',
        }
    },
    mounted() {
        this.studio = JSON.parse(sessionStorage.getItem('studio'))
        this.paymentInformation = JSON.parse(sessionStorage.getItem('paymentInformation'))
    },
    computed: {
        wHeight() {
            let wHeight = window.innerHeight;
            return wHeight + 'px'
        },
    },
}