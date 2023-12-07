import React, { useState } from 'react';
import { Header } from '../../CommonComponents/components/Header';
import { Footer } from '../../CommonComponents/components/Footer';
import '../styles/Category.css'; // Adjust the path based on your project structure
import { Link } from 'react-router-dom';

export const Category = ({ categories, products }) => {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedBrands, setSelectedBrands] = useState([]);

  const uniqueCategories = categories.filter(
    (category, index, self) =>
      index === self.findIndex((c) => c.title === category.title)
  );


  const brands = ['Apple', 'Boat', 'Sony', 'Samsung', 'Oppo', 'Asus', 'Qubo', 'Vivo', 'Noise', 'CP PLUS'];

  const priceRanges = ['0-100', '100-500', '500-1000'];

  const [selectedPriceRange, setSelectedPriceRange] = useState('');
  const [sortBy, setSortBy] = useState('');
  const [productsToShow, setProductsToShow] = useState(12);
  const [sortedProducts, setSortedProducts] = useState(products);


  const filteringOptions = [
    ...brands.map((brand, index) => ({ id: `brand${index + 1}`, label: brand })),
    ...priceRanges.map((range, index) => ({ id: `range${index + 1}`, label: range })),
  ];

  const handlePriceRangeChange = (event) => {
    setSelectedPriceRange(event.target.value);
  };

  const handleSortByChange = (event) => {
    const selectedSortBy = event.target.value;
    const sortingFunction = (a, b) => {
      switch (selectedSortBy) {
        case 'name':
          return a.name.localeCompare(b.name);
        case 'price-asc':
          return a.price - b.price;
        case 'price-desc':
          return b.price - a.price;
        case 'rating':
          return b.rating - a.rating;
        default:
          return 0;
      }
    };
    const newSortedProducts = products.slice().sort(sortingFunction);
    setSortedProducts(newSortedProducts);
  };

  const handleProductsToShowChange = (event) => {
    setProductsToShow(parseInt(event.target.value, 10));
  };

  const handleCategoryChange = (categoryTitle) => {
    const updatedCategories = selectedCategories.includes(categoryTitle)
      ? selectedCategories.filter((category) => category !== categoryTitle)
      : [...selectedCategories, categoryTitle];

    setSelectedCategories(updatedCategories);

    const updatedProducts = applyFilters(updatedCategories, selectedBrands);
    setSortedProducts(updatedProducts);
  };

  const handleBrandChange = (brandLabel) => {
    const updatedBrands = selectedBrands.includes(brandLabel)
      ? selectedBrands.filter((brand) => brand !== brandLabel)
      : [...selectedBrands, brandLabel];

    setSelectedBrands(updatedBrands);

    const updatedProducts = applyFilters(selectedCategories, updatedBrands);
    setSortedProducts(updatedProducts);
  };

  const applyFilters = (categories, brands) => {
    return products.filter(
      (product) =>
        (categories.length === 0 || categories.includes(product.title)) &&
        (brands.length === 0 || brands.includes(product.brand))
    );
  };

  return (
    <>
      <Header />
      <div id="page" className="site page-category">
        <div className="content-container">
          <div className="filters">
            <div className="filter-block">
              <h4>Category</h4>
              { uniqueCategories.map((category) => (
                <ul key={ category.title }>
                  <li>
                    <label htmlFor={ category.title } className="category-label">
                      <input
                        type="checkbox"
                        name="checkbox"
                        id={ category.title }
                        checked={ selectedCategories.includes(category.title) }
                        onChange={ () => handleCategoryChange(category.title) }
                      />
                      <span className="checked"></span>
                      <span className="category-name">{ category.title }</span>
                    </label>
                  </li>
                </ul>
              )) }
            </div>
            <div className="filter-block">
              <h4>Brands</h4>
              { filteringOptions
                .filter((option) => !priceRanges.includes(option.label))
                .map((option) => (
                  <ul key={ option.id }>
                    <li>
                      <input
                        type="checkbox"
                        name="checkbox"
                        id={ option.id }
                        checked={ selectedBrands.includes(option.label) }
                        onChange={ () => handleBrandChange(option.label) }
                      />
                      <label htmlFor={ option.id } className='brand-label'>
                        <span className="checked">{ option.label }</span>
                      </label>
                    </li>
                  </ul>
                )) }
            </div>

            <div className="filter-block price-range">
              <h4>Price Range</h4>
              <input
                type="range"
                min="0"
                max="1000"
                step="100"
                value={ selectedPriceRange }
                onChange={ handlePriceRangeChange }
              />
              <span className="selected-range">{ selectedPriceRange }</span>
            </div>
          </div>
        </div>
        <div className="top-right-filters">
          <div className="sort-by">
            <h4>Sort By</h4>
            <select value={ sortBy } onChange={ handleSortByChange }>
              <option value="">Select</option>
              <option value="price-desc">Price (High to Low)</option>
              <option value="price-asc">Price (Low to High)</option>
              <option value="rating">Rating</option>
            </select>
          </div>
          <div className="toshow">
            <h4>Products to Show</h4>
            <select value={ productsToShow } onChange={ handleProductsToShowChange }>
              <option value="8">8</option>
              <option value="12">12</option>
              <option value="24">24</option>
            </select>
          </div>
        </div>
        <div className="products">
          <div className="products main flexwrap">
            { sortedProducts.slice(0, productsToShow).map((product) => (
              <div className="item" key={ product._id }>
                <img src={ product.imagePath } alt={ product.name } />
                <Link to={ `/product/${product._id.$oid}` } className="product-link">
                  <h3 className="product-title">{ product.name }</h3>
                </Link>
                <p><strong style={ { textDecoration: 'line-through' } }>MRP: ${ product.mrp }</strong></p>
                <p>Price: ${ product.price }</p>
              </div>
            )) }
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Category;