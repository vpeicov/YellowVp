import React, { useState } from 'react';
import './ProductList.css';
import Modal from './Modal'; // Импортируйте Modal компонент
import SampooClassicImage from '../assets/SampooClassic.jpg';
import conditioner from '../assets/conditioner.jpg';
import instant from '../assets/instant.jpg'; 
import oil from '../assets/oil.jpg'; 
import capyxal from '../assets/capyxal.jpg'; 
import ser from '../assets/ser.png'; 
import pr from '../assets/pr.png'; 
import armonia from '../assets/shampoo-armonia-prod.png'; 
import armoniascr from '../assets/armoniascr.png'; 
import mass from '../assets/mass.png'; 
import masssol from '../assets/mass-solutionr-prod.png'; 
import filler from '../assets/filler.png'; 
import rest from '../assets/restorative-conditio.png'; 
import g1 from '../assets/g1adgy5rvbko.jpg'; 
import deep from '../assets/deep-infusion-4.jpg'; 
import resti from '../assets/res_b58e2760b785945f.jpg'; 
import filler2 from '../assets/61UdOSkcKoL.jpg'; 
import blondy from '../assets/hairfusion_claudia_h.jpg'; 
import purple from '../assets/blondy_joy_purple_co.jpg'; 
import ds from '../assets/ds.png'; 
import love from '../assets/love-hair-mist-3.jpg'; 
import wqe from '../assets/wqe.png'; 
import asd from '../assets/asd.png'; 
import scr from '../assets/scr.png'; 
import dry from '../assets/dry.png'; 
import day from '../assets/day.png'; 
import sce from '../assets/sce.png'; 
import bal from '../assets/bal.png'; 
import han from '../assets/han.png'; 
import lip from '../assets/lip.png'; 
import oel from '../assets/oel.png'; 
import cur from '../assets/cur.png'; 
import images from '../assets/images.jpeg'; 
import sadd from '../assets/sadd.jpg';
import ener from '../assets/ener.png';
import geler from '../assets/geler.png';
import saw from '../assets/saw.png';
import cvv from '../assets/cvv.png';
import ksiu from '../assets/ksiu.png';


interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
  image: string;
  description: string;
}

const ProductList = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product);
  };

  const closeModal = () => {
    setSelectedProduct(null);
  };

  const products: Product[] = [
    { id: 6, name: 'Sampoo Classic', price: 450, category: 'Hair', image: SampooClassicImage, description: 'Для всех типов волос' },
    { id: 7, name: 'Conditioner', price: 450, category: 'Hair', image: conditioner, description: 'для всех' },
    { id: 8, name: 'Product 3', price: 500, category: 'Hair', image: instant, description: 'Укрепляющий' },
    { id: 9, name: 'Product 4', price: 480, category: 'Hair', image: oil, description: 'Восстанавливающий' },
    { id: 10, name: 'Product 4', price: 480, category: 'Hair', image: capyxal, description: 'Восстанавливающий' },
    { id: 11, name: 'Product 4', price: 480, category: 'Hair', image: ser, description: 'Восстанавливающий' },
    { id: 12, name: 'Product 4', price: 480, category: 'Hair', image: pr, description: 'Восстанавливающий' },
    { id: 13, name: 'Product 4', price: 480, category: 'Hair', image: armonia, description: 'Восстанавливающий' },
    { id: 14, name: 'Product 4', price: 480, category: 'Hair', image: armoniascr, description: 'Восстанавливающий' },
    { id: 15, name: 'Product 4', price: 480, category: 'Hair', image: mass, description: 'Восстанавливающий' },
    { id: 16, name: 'Product 4', price: 480, category: 'Hair', image: masssol, description: 'Восстанавливающий' },
    { id: 18, name: 'Product 4', price: 480, category: 'Hair', image: filler, description: 'Восстанавливающий' },
    { id: 19, name: 'Product 4', price: 480, category: 'Hair', image: rest, description: 'Восстанавливающий' },
    { id: 20, name: 'Product 4', price: 480, category: 'Hair', image: g1, description: 'Восстанавливающий' },
    { id: 21, name: 'Product 4', price: 480, category: 'Hair', image: deep, description: 'Восстанавливающий' },
    { id: 22, name: 'Product 4', price: 480, category: 'Hair', image: resti, description: 'Восстанавливающий' },
    { id: 23, name: 'Product 4', price: 480, category: 'Hair', image: filler2, description: 'Восстанавливающий' },
    { id: 24, name: 'Product 4', price: 480, category: 'Hair', image: blondy, description: 'Восстанавливающий' },
    { id: 25, name: 'Product 4', price: 480, category: 'Hair', image: purple, description: 'Восстанавливающий' },
    //
    { id: 26, name: 'Product 4', price: 480, category: 'Body', image: ds, description: 'Восстанавливающий' },
    { id: 27, name: 'Product 4', price: 480, category: 'Body', image: love, description: 'Восстанавливающий' },
    { id: 28, name: 'Product 4', price: 480, category: 'Body', image: wqe, description: 'Восстанавливающий' },
    { id: 29, name: 'Product 4', price: 480, category: 'Body', image: asd, description: 'Восстанавливающий' },
    { id: 30, name: 'Product 4', price: 480, category: 'Body', image: scr, description: 'Восстанавливающий' },
    { id: 31, name: 'Product 4', price: 480, category: 'Body', image: dry, description: 'Восстанавливающий' },
    { id: 32, name: 'Product 4', price: 480, category: 'Body', image: day, description: 'Восстанавливающий' },
    { id: 33, name: 'Product 4', price: 480, category: 'Body', image: sce, description: 'Восстанавливающий' },
    { id: 34, name: 'Product 4', price: 480, category: 'Body', image: bal, description: 'Восстанавливающий' },
    { id: 35, name: 'Product 4', price: 480, category: 'Body', image: han, description: 'Восстанавливающий' },
    { id: 36, name: 'Product 4', price: 480, category: 'Body', image: lip, description: 'Восстанавливающий' },
    { id: 37, name: 'Product 4', price: 480, category: 'Body', image: oel, description: 'Восстанавливающий' },
    //
    { id: 38, name: 'Product 4', price: 480, category: 'Styling', image: cur, description: 'Восстанавливающий' },
    { id: 39, name: 'Product 4', price: 480, category: 'Styling', image: images, description: 'Восстанавливающий' },
    { id: 40, name: 'Product 4', price: 480, category: 'Styling', image: sadd, description: 'Восстанавливающий' },
    //
    { id: 41, name: 'Product 4', price: 480, category: 'Men', image: ener, description: 'Восстанавливающий' },
    { id: 42, name: 'Product 4', price: 480, category: 'Men', image: geler, description: 'Восстанавливающий' },
    { id: 43, name: 'Product 4', price: 480, category: 'Men', image: saw, description: 'Восстанавливающий' },
    //
    { id: 44, name: 'Product 4', price: 480, category: 'BOX SETS', image: cvv, description: 'Восстанавливающий' },
    { id: 45, name: 'Product 4', price: 480, category: 'BOX SETS', image: ksiu, description: 'Восстанавливающий' },
  ];

  return (
    <div>
      <h2>Product List</h2>
      <div className="product-container">
        {products.map((product) => (
          <div key={product.id} className="product" onClick={() => handleProductClick(product)}>
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p>Price: {product.price} mdl</p>
          </div>
        ))}
      </div>
      {selectedProduct && <Modal product={selectedProduct} onClose={closeModal} />}
    </div>
  );
};

export default ProductList;