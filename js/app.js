// var app = "Hello World!";

var app = new Vue({
    el: "#app",
    data: {
        title: "Hello World!",
        description: "Lorem ipsum is a dummy text just to display.",
        image: "./assets/images/male.jpg",
        imgLink: "https://www.google.co.in/",
        inStock: 0,
        onSale: false,
        details: ['First', 'Second', 'Third'],
        myNames: [{
            firstName: 'Sagar',
            lastName: 'Sabat'
        }, {
            firstName: 'Santosh',
            lastName: 'Gudla'
        }, {
            firstName: 'Karan',
            lastName: 'Yadav'
        }],
        cartValue: 0,
        // images: "./assets/images/male.jpg",
        selectedImage: 0,
        genders: [{
            genValue: 'Male',
            genImage: "./assets/images/male.jpg",
        }, {
            genValue: 'Female',
            genImage: "./assets/images/female.jpg"
        }],
        colors: [{
            variantColor: 'green'
        }, {
            variantColor: 'blue'
        }],
        colorBox: {
            width: '40px',
            height: '40px'
        },
        brand: "Vue Mastery",
        product: "Socks"
    },
    methods: {
        updateGender: function (index) {
            this.selectedImage = index;
            console.log(index);
        }
    },
    computed: {
        computedtitle() {
            return this.brand + " " + this.product
        },
        images() {
            return this.genders[this.selectedImage].genImage
        }
    }
})