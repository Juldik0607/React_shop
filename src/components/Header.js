import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-top bg-light text-center py-1">
        <span>ГАРАНТИЯ ЛУЧШЕЙ ЦЕНЫ</span>
      </div>
      <nav className="navbar navbar-expand-lg navbar-light bg-transparent">
        <div className="container">
          <a className="navbar-brand" href="#">DEALER</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item">
                <a className="nav-link" href="#">Одежда</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Обувь</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Аксессуары</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Сумки</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Товары для спорта</a>
              </li>
            </ul>
            <div className="navbar-nav">
              <a className="nav-link" href="#"><i className="fa fa-heart"></i></a>
              <a className="nav-link" href="#"><i className="fa fa-shopping-cart"></i></a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;