var app = new Vue({
    el: '#app',
    data: {
        brand: "Vue Mastery",
        product: "Socks",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        // image: "./assets/images/vmSocks-green-onWhite.jpg",
        selectedVariant: 0,
        link: "https://vuejs.org/v2/guide/",
        // inStock: false,
        details: ['80% cotton', '20% polyester', 'Gender neutral'],
        variants: [{
            variandId: 2234,
            variantColor: "green",
            variantImage: "./assets/images/vmSocks-green-onWhite.jpg",
            variantQuantity: 10
        }, {
            variandId: 2235,
            variantColor: "blue",
            variantImage: "./assets/images/vmSocks-blue-onWhite.jpg",
            variantQuantity: 0
        }],
        cart: 0,
        onSale: false
    },
    methods: {
        addToCart: function () {
            this.cart += 1;
        },
        updateProduct: function (index) {
            this.selectedVariant = index;
            // console.log(index)
        }
    },
    computed: {
        title() {
            return this.brand + " " + this.product;
        },
        image() {
            return this.variants[this.selectedVariant].variantImage
        },
        inStock() {
            return this.variants[this.selectedVariant].variantQuantity
        },
        sale() {
            if (this.onSale) {
                return this.brand + ' ' + this.product + ' are on sale!'
            } else {
                return this.brand + ' ' + this.product + ' are not on sale!'
            }
        }
    }
})