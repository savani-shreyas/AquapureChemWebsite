document.addEventListener("DOMContentLoaded", function () {

  // Get product ID from URL
  const urlParams = new URLSearchParams(window.location.search);
  const productId = urlParams.get("id");

  if (!productId) {
    document.getElementById("productDetails").innerHTML = "<h2>Product Not Found</h2>";
    return;
  }

  // Fetch products JSON
  fetch('./products.json')
    .then(response => response.json())
    .then(data => {

      let foundProduct = null;

      // Loop through all categories
      Object.keys(data).forEach(category => {
        data[category].forEach(product => {
          if (product.id === productId) {
            foundProduct = product;
          }
        });
      });

      if (!foundProduct) {
        document.getElementById("productDetails").innerHTML = "<h2>Product Not Found</h2>";
        return;
      }

      renderProduct(foundProduct);

    })
    .catch(error => console.error("Error loading product:", error));


  function renderProduct(product) {

    let detailsList = "";
    if (product.otherDetails) {
        const detailsArray = product.otherDetails.split("|");

        detailsArray.forEach(detail => {
        detailsList += `<li>${detail.trim()}</li>`;
        });
    }

    const productHTML = `
      <div class="product-details-wrapper">
        <div class="product-image">
            <div class="product-image-box">
                <img src="${product.PRDImage1}" class="w-100" alt="${product.name}" />
            </div>
            <div class="product-image-box">
                <img src="${product.PRDImage2}" class="w-100" alt="${product.name}" />
            </div>
            <div class="product-image-box">
                <img src="${product.PRDImage3}" class="w-100" alt="${product.name}" />
            </div>
            <div class="product-image-box">
                <img src="${product.PRDImage4}" class="w-100" alt="${product.name}" />
            </div>
            <div class="product-image-box">
                <img src="${product.PRDImage5}" class="w-100" alt="${product.name}" />
            </div>
        </div>
        <div class="product-info">
            <div>
                <h1>${product.name}</h1>
                <p>${product.description}</p>
                <p>${product.description1}</p>
            </div>
            <div>
                <h4 class="prd-page-detail-heading">other details</h4>
                <ul class="product-other-details">
                    ${detailsList}
                </ul>
            </div>
        </div>
      </div>
    `;

    document.getElementById("productDetails").innerHTML = productHTML;
  }

});