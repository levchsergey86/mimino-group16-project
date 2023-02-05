function swiperSlider() {
    const aboutRestMain = document.querySelectorAll('[data-slider="about-rest-slider"]');
    const detRestMain = document.querySelectorAll('[data-slider="det-rest-slider"]');
    //const heroSlider = document.querySelectorAll('[data-slider="hero-slider"]');
    if (aboutRestMain) {
        aboutRestMain.forEach(slider => {
            // кнопки вперед та назад
            let arrowLeft = slider.querySelector('.arrow-swiper-prev');
            let arrowRight = slider.querySelector('.arrow-swiper-next');

            let swiper = new Swiper(slider.querySelector('.swiper'), {
                speed: 1500,
                // автоплей
                //centeredSlides: true,
                // autoplay: {
                //     delay: 3000,
                //     disableOnInteraction: false,
                // },
                slidesPerView: 2, // кількість слайдерів для показу
                spaceBetween: 25, // відстань між слайдерами
                loop: true,
                loopedSlides: 10,

                // кнопки навігації
                navigation: {
                    nextEl: arrowRight,
                    prevEl: arrowLeft,
                },

                // додаємо додатковий клас
                // можна використовувати для додаткових анімацій
                on: {
                    transitionStart: function () {
                        let previousIndex = this.previousIndex;
                        let previousSlide = slider.getElementsByClassName('swiper-slide')[previousIndex];
                        if (previousSlide) {
                            setTimeout(function () {
                                previousSlide.classList.remove('is-play');
                            }, 1000);
                        }
                    },
                    transitionEnd: function () {
                        let activeIndex = this.activeIndex;
                        let activeSlide = slider.getElementsByClassName('swiper-slide')[activeIndex];
                        activeSlide.classList.add('is-play');
                    },
                },
                // адаптив
                breakpoints: {
                    // when window width is >= 320px
                    414: {
                        slidesPerView: 2,
                        spaceBetween: 25,
                        
                    },
                    // when window width is >= 768px
                    1024: {
                        slidesPerView: 2,
                        spaceBetween: 40
                    },
                    // when window width is >= 1200px
                    1280: {
                        slidesPerView: 2,
                        spaceBetween: 40
                    }
                }

            });
        });
    }
    if (detRestMain) {
        detRestMain.forEach(slider => {
            // кнопки вперед та назад
            let arrowLeft = slider.querySelector('.arrow-swiper-prev');
            let arrowRight = slider.querySelector('.arrow-swiper-next');

            let swiper = new Swiper(slider.querySelector('.swiper'), {
                speed: 1500,
                // автоплей
                //centeredSlides: true,
                // autoplay: {
                //     delay: 3000,
                //     disableOnInteraction: false,
                // },
                slidesPerView: 2, // кількість слайдерів для показу
                spaceBetween: 0, // відстань між слайдерами
                loop: true,
                loopedSlides: 10,

                // кнопки навігації
                navigation: {
                    nextEl: arrowRight,
                    prevEl: arrowLeft,
                },

                // додаємо додатковий клас
                // можна використовувати для додаткових анімацій
                on: {
                    transitionStart: function () {
                        let previousIndex = this.previousIndex;
                        let previousSlide = slider.getElementsByClassName('swiper-slide')[previousIndex];
                        if (previousSlide) {
                            setTimeout(function () {
                                previousSlide.classList.remove('is-play');
                            }, 1000);
                        }
                    },
                    transitionEnd: function () {
                        let activeIndex = this.activeIndex;
                        let activeSlide = slider.getElementsByClassName('swiper-slide')[activeIndex];
                        activeSlide.classList.add('is-play');
                    },
                },
                // адаптив
                breakpoints: {
                    // when window width is >= 320px
                    414: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    // when window width is >= 768px
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 34
                    },
                    // when window width is >= 1200px
                    1280: {
                        slidesPerView: 3,
                        spaceBetween: 87
                        
                    }
                }

            });
        });
    }

}
window.addEventListener('load', swiperSlider, false);


