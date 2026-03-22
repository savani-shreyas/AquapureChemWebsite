document.addEventListener("DOMContentLoaded", function () {
    fetch('./products.json')
        .then(response => response.json())
        .then(data => {
            renderProducts(data.acid, "acidContainer");
            renderProducts(data.chemicals, "chemicalsContainer");
            renderProducts(data.industrialSalt, "industrialSaltContainer");
            renderProducts(data.solvents, "solventsContainer");
            renderProducts(data.pigments, "pigmentsContainer");
            renderProducts(data.dyes, "dyesContainer");
        })
        .catch(error => console.error("Error loading JSON:", error));

    function renderProducts(products, containerId) {
        const container = document.getElementById(containerId);

        if (!container) return;

        products.forEach(product => {
            const productHTML = `
                <div class="product-slider-box">
                    <img src="${product.image}" alt="${product.name}" class="productSlider-img" />
                    <div class="product-slider-wrapper">
                        <div class="product-slider-content">
                            <h3 class="product-name">${product.name}</h3>
                            <a href="product-details.html?id=${product.id}" class="view-more-btn">view more</a>
                        </div>
                    </div>
                </div>
            `;

            container.insertAdjacentHTML("beforeend", productHTML);
        });
    }
});