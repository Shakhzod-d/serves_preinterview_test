import React from "react";

import phoneCall from "../../assets/img/phone-call (1) 1.svg";
import map from "../../assets/img/map.svg";
import logo from "../../assets/img/logo 1.png";
import search from "../../assets/img/search.svg";
import facebook from "../../assets/img/f_1_.svg";
import flag from "../../assets/img/flag.svg";
import slide from "../../assets/img/slide 1.svg";

import "./Header.css";

export const Header = () => {
  return (
    <header className="header_nav">
      <nav>
        <div className="container">
          <div className="navigation">
            <div className="map_nav">
              <button>
                <img src={map} alt="" />
              </button>
              <p>г.Ташкент, Чиланзар10 квартал, дом 3/1</p>
            </div>
            <div className="call_nav">
              <button>
                <img src={phoneCall} alt="ssss" />
              </button>
              <p>+998 71 276-62-53 +998 71 276-62-54</p>
            </div>
            <div className="logo">
              <img src={logo} alt="" />
            </div>
            <div className="search_nav">
              <button>
                <img src={search} alt="" />
              </button>
            </div>
            <div className="fasebok_nav">
              <button>
                <img src={facebook} alt="" />
                <p> Facebook </p>
              </button>
            </div>
            <div className="language_nav">
              <button>
                <img src={flag} alt="" />
                <p>Русский </p>
              </button>
            </div>
            <div className="h1">=</div>
          </div>
          <div className="navigation_two">
            <div className="blog_one">МАГАЗИН </div>
            <div className="blog">О КОМПАНИИ </div>
            <div className="blog1">ПРОДУКЦИЯ </div>
            <div className="blog2">УСЛУГИ </div>
            <div className="blog">АКЦИИ </div>
            <div className="blog_two">ОБРАТНАЯ СВЯЗЬ </div>
          </div>
        </div>
      </nav>
      <div className="container">
        <div className="banner">
          <div className="banner_blog">
            <div className="banner_tittle">
              <h1>Анализатор ABL800 FLEX</h1>
              <p>
                Ориентированный на среднюю или высокую производительность
                тестов, анализатор ABL800 FLEX измеряет полный набор параметров,
                включая pH, газы крови, электролиты, метаболиты и показатели
                оксиметрии
              </p>
              <button>Подробнее</button>
            </div>
            <div className="blog_img">
              <img src={slide} alt="" />
            </div>
          </div>
          <div className="round_carusel">
            <button className="round_button1"></button>
            <button className="round_button1"></button>
            <button className="round_button1"></button>
          </div>
        </div>
      </div>
    </header>
  );
};
