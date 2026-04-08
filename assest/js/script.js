var hroSwiper = new Swiper(".hroSwiper", {
    navigation: {
        nextEl: ".swiper-button-next.heroSlider-next",
        prevEl: ".swiper-button-prev.heroSlider-prev",
    },
});

var productSwiper = new Swiper(".productSwiper", {
    slidesPerView: 4,
    spaceBetween: 30,
    navigation: {
        nextEl: ".swiper-button-next.productSlider-next",
        prevEl: ".swiper-button-prev.productSlider-prev",
    },
});

fetch('./products.json')
    .then(response => response.json())
    .then(data => {
        const sliderWrapper = document.getElementById("productSliderWrapper");
        const products = [...data.acid, ...data.chemicals];

        products.forEach(product => {
            const slide = `
                <div class="swiper-slide">
                    <div class="product-slider-box">
                        <img src="${product.image}" alt="${product.name}" class="productSlider-img">
                        <div class="product-slider-wrapper">
                            <div class="product-slider-content">
                                <h3 class="product-name">${product.name}</h3>
                                <a href="product-details.html?id=${product.id}" title="View More" class="view-more-btn">view more</a>
                            </div>
                        </div>
                    </div>
                </div>
            `;

            sliderWrapper.innerHTML += slide;
        });

        const swiper = new Swiper(".productSwiper", {
            slidesPerView: 4,
            spaceBetween: 20,
            loop: true,
            navigation: {
                nextEl: ".productSlider-next",
                prevEl: ".productSlider-prev",
            },
            breakpoints: {
                320: { slidesPerView: 2 },
                576: { slidesPerView: 2 },
                768: { slidesPerView: 3 },
                1200: { slidesPerView: 4 }
            }
        });
    });