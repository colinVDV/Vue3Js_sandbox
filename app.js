const app = Vue.createApp({
    data() {
        return {
            showBooks: true,
            x: 0,
            y:0,
            url: 'https://www.google.com/',
            books: [
                {title: 'book 1', author: 'random dude', age: 1000, img: 'assets/book1.jpg', isFav: true},
                {title: 'book 2', author: 'random dudette', age: 100, img: 'assets/book2.jpg', isFav: false},
                {title: 'book 3', author: 'random animal', age: 1300, img: 'assets/book3.jpg', isFav: true}
            ]
        }
    },

    methods: {
        toggleShowBooks() {
            this.showBooks = !this.showBooks
        },
        handleEvent(e){
            console.log(e, e.type)
        },
        handleMouseMove(e) {
            this.x = e.offsetX
            this.y = e.offsetY
        },
        toggleFav(e, bookIn) {
            bookIn.isFav = !bookIn.isFav
            console.log(e, e.type)
        }
    },

    computed: {
        filteredBooks() {
            return this.books.filter((book) => book.isFav)
        }
    }

})

app.mount('#app')