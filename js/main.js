const { createApp } = Vue

createApp({

    data() {
        return {
            images: [
                "./img/1.jpeg",
                "./img/2.webp",
                "./img/3.jpeg",
                "./img/4.jpg",
                "./img/5.jpg",
                "./img/6.jpg",
            ],
            activeImage: 0,
            timer: null
        }
    },
    methods: {
        checkImageVisibility(indice) {
            return (indice == this.activeImage) ? 'active' : '';
        },
        // checkImageVisibility(indice) {
        //     if (indice == 0) {
        //         return "active";
        //     } else {
        //         return "";
        //     }
        // }
        next() {
            this.activeImage++;
        },
        back() {
            this.activeImage--;
        },
        mostraSlide(indice) {
            this.activeImage = indice;
        }
    },
    mounted() {
        // this.activeImage = 3;
        console.log("Slide iniziale: ", this.activeImage);

        this.timer = setInterval(function () {
            console.log("passato un secondo");
        }, 1000);
    }

}).mount('#app')
