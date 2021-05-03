// Creare uno slider di immagini: potete usare le immagini che desiderate. Per facilitarvi la vita usate immagini delle stesse dimensioni :faccia_leggermente_sorridente: Lo slider prevederà due frecce (icone) che permettono di scorrere tra le immagini dello slider Inoltre per scorrere le immagini permettere anche l’uso delle frecce sinistra e destra della tastiera.
// Utiliziamo una classe first e last per capire quali sono la prima e ultima immagine dello slider Utilizziamo una classe active per aiutarci a capire quale è l’immagine attuale da visualizzare nello slider

const app = new Vue({
    el: "#slider",

    data: {
        indice_img: 0,
        index: "",

        // Creo un array con i link delle img
        imgs: [
            "img/01.jpg",
            "img/02.jpg",
            "img/03.jpg",
            "img/04.jpg",
            "img/05.jpg"
        ]

        // Utilizzo i tre metodi per cambiare le immagini dello slider
        // Next: da 0 a 4
        // Prev: da 4 a 0
        // Change: indice = index
    },
    methods: {
        next() {
            this.indice_img += 1;

            if (this.indice_img > 4) {
                this.indice_img = 0;
            }
            // console.log(indice_img)
        },
        prev() {
            this.indice_img -= 1;
            if (this.indice_img < 0) {
                this.indice_img = this.imgs.length - 1;
            }
        },
        change(index) {
            this.indice_img = index;
        },
    },
    mounted(){
        document.querySelector(".box-img").focus()
    }
})
