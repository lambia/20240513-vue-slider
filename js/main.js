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
            activeImage: 0
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
        }
    },
    mounted() {
        // this.activeImage = 3;
        console.log("Slide iniziale: ", this.activeImage);
    }

}).mount('#app')
