import React from 'react';
import Section from './Section';
import './Main.css';
import product1 from '../images/pop1.png';
import product2 from '../images/pop2.png';
import product3 from '../images/pop3.png';
import product4 from '../images/pop4.png';
import icon1 from '../images/icon1.png';
import icon2 from '../images/icon2.png';
import icon3 from '../images/icon3.png';
import icon4 from '../images/icon4.png';
import icon5 from '../images/icon5.png';

const products = [
  {
    id: 1,
    name: 'Сумка Jacquemus',
    model: 'Le Bambidou',
    price: '220 $',
    image: product1 ,
    label: 'HOT'
  },
  {
    id: 2,
    name: 'Сумка Jacquemus',
    model: 'Le Bambidou',
    price: '225 $',
    image: product2 ,
    label: 'HOT'
  },
  {
    id: 3,
    name: 'Сумка Jacquemus',
    model: 'Le Bambidou',
    price: '219,99 $',
    image: product3 ,
    label: 'HOT'
  },
  {
    id: 4,
    name: 'Сумка Jacquemus',
    model: 'Le Bambidou',
    price: '219,99 $',
    image: product4 ,
    label: 'HOT'
  }
];
const icons = [icon1, icon2, icon3, icon4, icon5];
const iconLabels = ['покупка', 'доставка', 'pre-loved', 'custom', 'консьерж'];

const Main = () => {
  return (
    <main className="main">
      <div className="banner">
        <div className="overlay">
          <h1>Распродажа товаров для нее</h1>
          <p className="badge">скидки до 90%!</p>
          <button className="btn btn-light mt-3">Перейти в каталог</button>
        </div>
      </div>
      <div className="icons-section">
        <div className="container">
          <div className="row justify-content-center">
            {icons.map((icon, index) => (
              <div className="col-2 text-center" key={index}>
                <div className="icon-wrapper">
                  <img src={icon} alt={iconLabels[index]} className="icon-img" />
                </div>
                <p>{iconLabels[index]}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Section title="Самое популярное сейчас">
        <div className="container">
          <div className="row">
            {products.map((product) => (
              <div className="col-md-3 mb-4" key={product.id}>
                <div className="card product-card">
                  <div className="card-label">{product.label}</div>
                  <img src={product.image} className="card-img-top" alt={product.name} />
                  <div className="card-body">
                    <h5 className="card-title">{product.name}</h5>
                    <p className="card-text">{product.model}</p>
                    <p className="card-price">{product.price}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-4">
            <button className="btn btn-outline-secondary">Перейти</button>
          </div>
        </div>
      </Section>
    </main>
  );
};

export default Main;