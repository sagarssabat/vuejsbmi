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
        images: "./assets/images/male.jpg",
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
        }, {
            colorBox: {
                width: '40px',
                height: '40px'
            }
        }]
    },
    methods: {
        updateGender: function (genImage) {
            this.images = genImage;
        }
    }
})