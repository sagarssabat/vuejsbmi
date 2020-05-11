var app = new Vue({
    el: '#app',
    data: {
        product: "Socks",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        image: "./assets/images/vmSocks-green-onWhite.jpg",
        link: "https://vuejs.org/v2/guide/",
        inStock: 10,
        details: ['80% cotton', '20% polyester', 'Gender neutral'],
        variants: [{
            variandId: 2234,
            variantColor: "green"
        }, {
            variandId: 2235,
            variantColor: "blue"
        }]
    }
})