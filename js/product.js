Vue.component('product', {
    props: {
        premium: {
            type: Boolean
            // required: true,
        },
    },
    template: `
        <div class="product">
            <div class="product-image">
                <a :href="link" target="_blank">
                    <img v-bind:src="image" alt="socks">
                </a>
            </div>
            <div class="product-info">
                <h1>{{ title }}</h1>
                <p> {{ description }} </p>
                <p v-if="inStock > 10">In Stock</p>
                <p v-else-if="inStock > 0 && inStock <= 10">Almost sold out</p>
                <p v-else>Out of Stock</p>
                <p>Shipping is: {{ shipping }}</p>
                <p>{{ sale }}</p>
                <!-- <p v-show="inStock">In Stock</p> -->
                <ul>
                    <li v-for="detail in details">{{detail}}</li>
                </ul>
                <div v-for="(variant, index) in variants" :key="variant.variantId"
                    :style="{backgroundColor:variant.variantColor}" class="color-box"
                    v-on:mouseover="updateProduct(index)">
                </div>
                <button v-on:click="addToCart" :disabled="!inStock" :class="{disabledButton:!inStock}">Add to
                    Cart</button>
                <button v-on:click="removeFromCart">Remove cart</button>
            </div>
        </div>
    `,
    data() {
        return {
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
            onSale: false
        }
    },
    methods: {
        addToCart: function () {
            // this.cart += 1;
            this.$emit('add-to-cart', this.variants[this.selectedVariant].variandId);
        },
        removeFromCart: function () {
            this.$emit('remove-cart', this.variants[this.selectedVariant].variandId);
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
        },
        shipping() {
            if (this.premium) {
                return 'free'
            } else {
                return 'Rs. 2.99'
            }
        }
    }
})
Vue.component('app-message', {
    props: {
        message: {
            type: String,
            required: true
        }
    },
    template: '<div>{{message}}</div>'
})
var app = new Vue({
    el: '#app',
    data: {
        premium: true,
        messageworks: 'New prop message',
        cart: [],
    },
    methods: {
        updateCart(id) {
            this.cart.push(id);
        },
        removeItem(id) {
            for (var i = this.cart.length - 1; i >= 0; i--) {
                if (this.cart[i] === id) {
                    this.cart.splice(i, 1);
                }
            }
        }
    }
})