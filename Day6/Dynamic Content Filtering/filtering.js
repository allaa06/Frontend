const products = [
    { id: 1, name: "Eco-friendly Water Bottle", category: "Home", price: 15, tags: ["eco-friendly", "new"] },
    { id: 2, name: "Organic Cotton T-shirt", category: "Apparel", price: 25, tags: ["eco-friendly"] },
    { id: 3, name: "Wireless Headphones", category: "Electronics", price: 200, tags: ["new", "sale"] }
  ];

  const filters = document.getElementById('filters');
  const categoryFilter = document.getElementById('category');
  const tagCheckboxes = document.querySelectorAll('#filters input[type="checkbox"]');
  const productsContainer = document.getElementById('products');

  function renderProducts(products) {
    productsContainer.innerHTML = '';
    products.forEach(product => {
      const productElement = document.createElement('div');
      productElement.innerHTML = `
        <h3>${product.name}</h3>
        <p>Category: ${product.category}</p>
        <p>Price: $${product.price}</p>
      `;
      productsContainer.appendChild(productElement);
    });
  }

  function applyFilters() {
    const category = categoryFilter.value;
    const selectedTags = Array.from(tagCheckboxes)
      .filter(checkbox => checkbox.checked)
      .map(checkbox => checkbox.value);

    let filteredProducts = products;
    if (category) {
      filteredProducts = filteredProducts.filter(product => product.category === category);
    }
    if (selectedTags.length > 0) {
      filteredProducts = filteredProducts.filter(product => selectedTags.every(tag => product.tags.includes(tag)));
    }
    renderProducts(filteredProducts);
  }

  filters.addEventListener('change', applyFilters);

  renderProducts(products);