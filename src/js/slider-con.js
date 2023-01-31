function swiperSlider() {
    const teamMain = document.querySelectorAll('[data-slider="team-slider"]');
    //const heroSlider = document.querySelectorAll('[data-slider="hero-slider"]');
    if (teamMain) {
        teamMain.forEach(slider => {
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
                spaceBetween: 5, // відстань між слайдерами

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

}
window.addEventListener('load', swiperSlider, false);