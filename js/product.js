var app = new Vue({
    el: '#app',
    data: {
        product: "Socks",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        image: "./assets/images/vmSocks-green-onWhite.jpg",
        link: "https://vuejs.org/v2/guide/",
        inStock: false,
        details: ['80% cotton', '20% polyester', 'Gender neutral'],
        variants: [{
            variandId: 2234,
            variantColor: "green",
            variantImage: "./assets/images/vmSocks-green-onWhite.jpg"
        }, {
            variandId: 2235,
            variantColor: "blue",
            variantImage: "./assets/images/vmSocks-blue-onWhite.jpg"
        }],
        cart: 0
    },
    methods: {
        addToCart: function () {
            this.cart += 1;
        },
        updateProduct: function (variantImage) {
            this.image = variantImage;
        }
    }
})