$('.owl-carousel').owlCarousel({
    stagePadding: 50,
    loop:true,
    margin:10,
   dots:true ,slideBy:3,autoplay:true,autoplayTimeout:4000,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:6
        }
    }
})