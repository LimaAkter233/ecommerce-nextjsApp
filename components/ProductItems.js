/*eslint-disable @next/next/no-img-element */
import React from 'react';
import Link from 'next/link';
export default function ProductItems({ product }) {
  return (
    // <div className="px-2 flex-1">
    //   <div className="bg-white">
    //     <div className=" border h-16 flex items-center">
    //       <a>
    //         <img
    //           className="rounded shadow flex-shrink-0 mr-4"
    //           src={product.image}
    //           alt={product.name}
    //         />
    //       </a>
    //       <h3 className="text-sm font-medium">Electronics Appliances</h3>
    //     </div>
    //   </div>
    // </div>

    <div className="card">
      <Link href={`/product/${product.slug}`}>
        <a>
          <img
            src={product.image}
            alt={product.name}
            className="rounded shadow"
          />
        </a>
      </Link>
      <div className="flex flex-col items-center justify-center p-5">
        <Link href={`/product/${product.slug}`}>
          <a>
            <h2 className="text-lg">{product.name}</h2>
          </a>
        </Link>
        <p className="mb-2">{product.brand}</p>
        <p>{product.price}</p>
        <button className="primary-button" type="button">
          Add to Cart
        </button>
      </div>
    </div>
  );
}
