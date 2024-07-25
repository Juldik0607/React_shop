// src/components/Footer.js
import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
        <footer className="footer bg-dark text-white py-4">
          <div className="container">
            <div className="row">
              <div className="col-md-3 mb-3">
                <h5>DEALER</h5>
                <p>Ваш поставщик в мир лимитированного ассортимента с доставкой по всему миру.</p>
              </div>
              <div className="col-md-3 mb-3">
                <h5>Каталог</h5>
                <ul className="list-unstyled">
                  <li><a href="#" className="text-white">Одежда</a></li>
                  <li><a href="#" className="text-white">Обувь</a></li>
                  <li><a href="#" className="text-white">Аксессуары</a></li>
                  <li><a href="#" className="text-white">Сумки</a></li>
                  <li><a href="#" className="text-white">Товары для спорта</a></li>
                  <li><a href="#" className="text-white">Pre-loved</a></li>
                  <li><a href="#" className="text-white">Custom</a></li>
                </ul>
              </div>
              <div className="col-md-3 mb-3">
                <h5>Меню</h5>
                <ul className="list-unstyled">
                  <li><a href="#" className="text-white">О нас</a></li>
                  <li><a href="#" className="text-white">Продать свою одежду</a></li>
                  <li><a href="#" className="text-white">Консьерж</a></li>
                  <li><a href="#" className="text-white">Клиентский сервис</a></li>
                </ul>
              </div>
              <div className="col-md-3 mb-3">
                <h5>Поддержка</h5>
                <ul className="list-unstyled">
                  <li><a href="#" className="text-white">Доставка</a></li>
                  <li><a href="#" className="text-white">Оплата</a></li>
                  <li><a href="#" className="text-white">Частые вопросы</a></li>
                  <li><a href="#" className="text-white">Клиентский сервис</a></li>
                  <li><a href="#" className="text-white">Отследить заказ</a></li>
                </ul>
              </div>
            </div>
            <div className="row">
              <div className="col text-center">
                <hr className="bg-light" />
                <p className="mb-0">© 2024 DEALER. Все права защищены.</p>
                <p>
                  <a href="#" className="text-white me-2"><i className="fab fa-facebook"></i></a>
                  <a href="#" className="text-white me-2"><i className="fab fa-twitter"></i></a>
                  <a href="#" className="text-white"><i className="fab fa-instagram"></i></a>
                </p>
              </div>
            </div>
          </div>
        </footer>
  );
};

export default Footer;