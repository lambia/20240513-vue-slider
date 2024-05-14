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
        nextButton() {
            this.stopAutoplay();
            this.next();
            this.startAutoplay();
        },
        backButton() {
            this.stopAutoplay();
            this.back();
            this.startAutoplay();
        },
        mostraSlide(indice) {
            this.stopAutoplay();
            this.activeImage = indice;
            this.startAutoplay();
        },
        next() {
            let ultimaSlide = this.images.length - 1;

            if (this.activeImage < ultimaSlide) {
                this.activeImage++;
            } else {
                this.activeImage = 0;
            }
        },
        back() {
            //versione con operatore ternario
            this.activeImage = (this.activeImage == 0) ? (this.images.length - 1) : (this.activeImage - 1);
        },
        stopAutoplay() {
            console.log("Stoppo l'autoplay");
            if (this.timer) {
                clearInterval(this.timer);
                this.timer = null;
            }
        },
        startAutoplay() {
            console.log("Avvio l'autoplay");
            if (!this.timer) {

                this.timer = setInterval(this.next, 1000);

                // Con funzione classica this vale oggetto Window. Creiamo una variabile che faccia riferimento a this.
                // Lo scope si propaga dall'alto verso il basso quindi vediamo la variabile anche nella funzione
                // let self = this;
                // this.timer = setInterval(function () {
                //     self.next();
                // }, 1000);

                // Con arrow function il this non cambia rispetto allo scope genitore (viene ereditato)
                // this.timer = setInterval(() => {
                //     this.next();
                // }, 1000);


            }
        }
    },
    mounted() {
        // this.activeImage = 3;
        console.log("Slide iniziale: ", this.activeImage);

        this.startAutoplay();
    }

}).mount('#app')
