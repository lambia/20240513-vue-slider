console.log("Caricamento file JS iniziato");

const { createApp } = Vue

createApp({

    data() {
        return {
            percorsoImg: "./img/1.jpeg",
            names: [
                'Michele',
                'Fabio',
                'Roberto'
            ],
            vueIsAwesome: false
        }
    },
    methods: {
        changeVueAwesomeness() {
            // if (this.vueIsAwesome == false) {
            //     this.vueIsAwesome = true;
            // } else {
            //     this.vueIsAwesome = false;
            // }
            this.vueIsAwesome = !this.vueIsAwesome;
        },
        cambiaPercorso() {
            if (this.percorsoImg == "./img/1.jpeg") {
                this.percorsoImg = "./img/2.webp";
            } else {
                this.percorsoImg = "./img/1.jpeg"
            }
        },
    },
    mounted() {
        console.log("Applicazione Vue montata correttamente");
        console.log("Nomi: ", this.names);
        // this.title = "Applicazione caricata";
        // this.cambiaTitolo();
    }

}).mount('#app')
