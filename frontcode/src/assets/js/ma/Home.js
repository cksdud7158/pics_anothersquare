import SwipeListener from 'swipe-listener';
export default {
    name: 'Home',
    mounted() {
        this.swipeLisner_home();
    },
    methods: {
        swipeLisner_home() {
            console.log("호출")
            let container = document.querySelector('#container');
            let now = this
            SwipeListener(container);

            container.addEventListener('swipe', function(e) {
                console.log('swipe', e.detail);
                var d = e.detail.directions;

                if (d.top) {
                    if (d.right) {
                        console.log('Swiped top-right.');
                    } else if (d.left) {
                        console.log('Swiped top-left.');
                    } else {
                        console.log('Swiped top.');
                        now.toMa002()
                    }
                } else if (d.bottom) {
                    if (d.right) {
                        console.log('Swiped bottom-right.');
                    } else if (d.left) {
                        console.log('Swiped bottom-left.');
                    } else {
                        console.log('Swiped bottom.');
                    }
                } else {
                    if (d.right) {
                        console.log('Swiped right.');
                        now.toMe001()
                    } else if (d.left) {
                        console.log('Swiped left.');
                        now.toSe001()
                    }
                }
            });

            container.addEventListener('swiping', function(e) {
                console.log('swiping', e.detail);
            });

            container.addEventListener('swiperelease', function(e) {
                console.log('swiperelease', e.detail);
            });

            container.addEventListener('swipecancel', function(e) {
                console.log('swipecancel', e.detail);
            });

        },
        toMa002() {
            this.$router.push("/ma002");
        },
        toMe001() {
            this.$router.push("/me001");
        },
        toSe001() {
            this.$router.push("/se001");
        }
    },
    computed: {
        wHeight() {
            let wHeight = window.innerHeight;
            return wHeight + 'px'
        }
    }
}