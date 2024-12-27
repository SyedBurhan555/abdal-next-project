// components/ProductGrid.js
"use client";
import Image from 'next/image';

const ProductGrid = () => {
  const products = [
    { id: 1, name: 'The Catalyzer', price: '$16.00', image: '/assets/images/hero-chair.png' },
    { id: 2, name: 'Shooting Stars', price: '$21.15', image: '/assets/images/hs.png' },
    { id: 3, name: 'Neptune', price: '$12.00', image: '/assets/images/cb.png' },
    { id: 4, name: 'The 400 Blows', price: '$18.40', image:  '/assets/images/spc-five.png' },
    { id: 5, name: 'The Catalyzer', price: '$16.00', image:  '/assets/images/pq.png' },
    { id: 6, name: 'Shooting Stars', price: '$21.15', image:  '/assets/images/fd.png' },
  ];
  
  return (
    <section className="text-gray-600 body-font">
      <div className="container mx-auto px-5 py-24">
        <div className="flex flex-wrap justify-center -m-4"> 
          {products.map((product) => (
            <div key={product.id} className="lg:w-1/3 md:w-1/2 p-4 w-full"> 
              <div className="block relative h-48 rounded overflow-hidden cursor-pointer hover:shadow-lg transition">
                <Image
                  alt={product.name}
                  width={100}
                  height={100}
                  className="object-cover object-center w-full h-full block"
                  src={product.image}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33.33vw" 
                />
              </div>
              <div className="mt-4 text-center"> 
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                  CATEGORY
                </h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">
                  {product.name}
                </h2>
                <p className="mt-1">{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;