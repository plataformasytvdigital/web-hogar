var swiper = new Swiper(".swiper-mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides:true,
    slidesParView: 3,
    coverflowEffect: {
        rotate:15,
        stretch:0,
        depth:300,
        modifier:1,
        slideShadows: true,
    },
    loop:true,



});
