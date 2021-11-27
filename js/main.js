const app = new Vue({
    el: "#root",
    data: {
        items: [{
                image: "img/01.jpg",
                title: "New York",
                sub: "Che bella New York"
            },
            {
                image: "img/02.jpg",
                title: "Los Angeles",
                sub: "Che bella Los Angeles",
            },
            {
                image: "img/03.jpg",
                title: "Washington DC",
                sub: "Che bella Washington DC",
            },
            {
                image: "img/04.jpg",
                title: "Miami",
                sub: "Che bella Miami",
            },
            {
                image: "img/05.jpg",
                title: "Las Vegas",
                sub: "Che bella Las Vegas",
            },
        ],
        currentImg: 0,
    },
    methods: {
        nextImg: function () {
            if (this.currentImg == this.items.length - 1) {
                this.currentImg = 0;
            } else {
                this.currentImg++;
            }

        },

        prevImg: function () {
            if (this.currentImg == 0) {
                this.currentImg = this.items.length - 1;
            } else {
                this.currentImg--;
            }
        },
        setActiveClass: function (i) {
            if (i == this.currentImg) {
                return 'active';
            } else {
                return '';
            }
        }
    },
})