import React from "react";

import banner_1 from "../../assets/img/banner_1.png";
import banner_2 from "../../assets/img/banner_2.png";
import banner_3 from "../../assets/img/banner_3.png";
import banner_4 from "../../assets/img/banner_4.png";
import banner_5 from "../../assets/img/banner_5.png";
import banner_6 from "../../assets/img/banner_6.png";

export const SectionA = () => {
  return (
    <section>
      <div class="container_two">
        <h2 class="products_text">ПРОДУКЦИЯ</h2>
        <div class="menu_blog">
          <div class="products">
            <div class="products_blog">
              <img src={banner_1} alt="ddd" />
              <p>Эндоваскулярная хирургия</p>
              <button>Посмотреть все</button>
            </div>
          </div>

          <div class="products">
            <div class="products_blog1">
              <img src={banner_2} alt="" />
              <p>Лабораторная диагностика</p>
              <button>Посмотреть все</button>
            </div>
          </div>

          <div class="products">
            <div class="products_blog2">
              <img src={banner_3} alt="" />
              <p>Кардиохирургия</p>
              <button>Посмотреть все</button>
            </div>
          </div>

          <div class="products">
            <img class="products_imgs" src={banner_4} alt="" />
            <div class="products_blog3">
              <p>ДИАБЕТ</p>
              <button>Посмотреть все</button>
            </div>
          </div>

          <div class="products">
            <div class="products_blog4">
              <img src={banner_5} alt="" />
              <p>ЭНДОУРОЛОГИЯ</p>
              <button>Посмотреть все</button>
            </div>
          </div>

          <div class="products">
            <div class="products_blog5">
              <img src={banner_6} alt="" />
              <p> АРИТМОЛОГИЯ</p>
              <button>Посмотреть все</button>
            </div>
          </div>
        </div>
        <div class="strelka">
          <p>Перейти в каталог нашей продукции </p>{" "}
          <img src="./img/strelka.svg" alt="" />
        </div>
        <h2 class="products_tittle">УСЛУГИ</h2>
      </div>
    </section>
  );
};
