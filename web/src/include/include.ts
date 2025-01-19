export const indexScript = [
    "/js/jquery.min.js"
    , "/js/jquery-migrate-3.0.1.min.js"
    , "/js/popper.min.js"
    , "/js/bootstrap.min.js"
    , "/js/jquery.easing.1.3.js"
    , "/js/jquery.waypoints.min.js"
    , "/js/jquery.stellar.min.js"
    , "/js/owl.carousel.min.js"
    , "/js/jquery.magnific-popup.min.js"
    , "/js/jquery.animateNumber.min.js"
    , "/js/scrollax.min.js"
    // , "https://maps.googleapis.com/maps/api/js?key=AIzaSyBVWaKrjvy3MaE7SQ74_uJiULgl1JY0H2s&sensor=false"
    // , "js/google-map.js"
    , "https://cdnjs.cloudflare.com/ajax/libs/bootstrap-select/1.13.1/js/bootstrap-select.min.js"
    , "/js/main.js"
];

export const contactScript = [
    ...indexScript,
    , "https://maps.googleapis.com/maps/api/js?key=AIzaSyBVWaKrjvy3MaE7SQ74_uJiULgl1JY0H2s&sensor=false"
    , "js/google-map.js"
]

export const indexStyle = [
    'https://fonts.googleapis.com/css2?family=Spectral:ital,wght@0,200;0,300;0,400;0,500;0,700;0,800;1,200;1,300;1,400;1,500;1,700&display=swap'
    , 'https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css'
    , '/css/animate.css'
    , '/css/owl.carousel.min.css'
    , '/css/owl.theme.default.min.css'
    , '/css/magnific-popup.css'
    , '/css/flaticon.css'
    , '/css/style.css'
]

export const productsStyle = [
    ...indexStyle,
    "https://cdnjs.cloudflare.com/ajax/libs/bootstrap-select/1.13.1/css/bootstrap-select.min.css"
]

export const productsScript = [
    ...indexScript
]

export const links = {
    "facebook": "https://www.facebook.com/share/14sfu6p7c9/?mibextid=wwXIfr",
    "home": "/",
}

export const socialMediaLinks = [
    {
        name: "facebook",
        url: links.facebook,
        icon: "fa fa-facebook"
    },
    {
        name: "twitter",
        url: "XXXXXXXXXXXXXXXXXXXX",
        icon: "fa fa-twitter"
    },
    {
        name: "instagram",
        url: "XXXXXXXXXXXXXXXXXXXXXXXXXX",
        icon: "fa fa-instagram"
    },
    {
        name: "dribbble",
        url: "/",
        icon: "fa fa-dribbble"
    }
]

export const navElements = {
    home: "home",
    about: "about",
    products: "products",
    contact: "contact",
    blog: "blog",
    
}
