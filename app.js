const app = Vue.createApp({
    data() {
        return {
            showBooks: true,
            title: 'The final empire',
            author: 'JK Rowling',
            age: 33
        }
    },

    methods: {
        decreaseAge() {
            this.age -=1
        },

        changeTitle(title) {
            this.title = title
        }
        ,
        toggleShowBooks() {
            this.showBooks = !this.showBooks
        }
    }

})

app.mount('#app')