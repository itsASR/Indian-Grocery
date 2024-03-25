// components/Products.js
import React from 'react';
import ProductDisplay from './ProductDisplay';

const Products = () => {
  // You can fetch products data from an API here
  
  return (
    <section className="py-20 ">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8">Featured Products</h2>
        {/* Product grid */}
        {/* <ProductDisplay></ProductDisplay> */}
      </div>
    </section>
  );
}

export default Products;
