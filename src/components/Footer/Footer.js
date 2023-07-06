import React from "react";

import map from "../../assets/img/map.svg";
import email from "../../assets/img/email 1.svg";
import phone from "../../assets/img/phone-call (1) 1.svg";
import logo from "../../assets/img/logo 1.png";

export const Footer = () => {
  return (
    <footer class="footer">
      <div class="container">
        <div class="footer_blog">
          <div class="footer_info">
            <div class="footer_blog_big-blog">
              <div class="footer_text">
                <h2>Контакты</h2>
              </div>
              <div class="map_info">
                <div class="map_nav">
                  <button>
                    <img src={map} alt="" />
                  </button>
                  <p>г.Ташкент, Чиланзар10 квартал, дом 3/1</p>
                </div>
                <div class="map_nav">
                  <button>
                    <img src={email} alt="" />
                  </button>
                  <p>info@medol.uz </p>
                </div>
              </div>

              <div class="call_info">
                <div class="call_nav">
                  <button>
                    <img src={phone} alt="" />
                  </button>
                  <p>+998 71 276-62-53 +998 71 276-62-54</p>
                </div>
                <button class="call_info_button">Оставить заявку</button>
              </div>
            </div>
            <div class="footer_blog_logo">
              <div class="footer_info_text">
                <div class="logo_img-blog">
                  <img src={logo} alt="" />
                </div>
                <div class="logo_img-text">
                  <p>
                    Наша цель – построить прозрачный, долгосрочный бизнес,
                    приносить огромную пользу населению, путем решения
                    глобальных вопросов. Внедряя инновационные технологии на
                    рынок Узбекистана.
                  </p>
                </div>
              </div>
              <div class="email">
                <p>© 2023 ООО «Medical Online Services»</p>
              </div>
            </div>
          </div>
          <div class="footer_info-text">
            <div class="foote_menu-blog">
              <p class="Kompany-blog-footer"> O компании </p>
              <p class="kompany-paragrf">
                {" "}
                <a href="">История</a>{" "}
              </p>
              <p class="kompany-paragrf">
                {" "}
                <a href="">Партнеры</a>{" "}
              </p>
              <p class="kompany-paragrf">
                {" "}
                <a href="">Вакансии</a>{" "}
              </p>
            </div>

            <div class="foote_menu-blog">
              <p class="Kompany-blog-footer">Продукция </p>
              <p class="kompany-paragrf">
                {" "}
                <a href="">Эндоваскулярная </a>{" "}
              </p>
              <p class="kompany-paragrf">
                {" "}
                <a href="">хирургия</a>{" "}
              </p>
              <p class="kompany-paragrf">
                {" "}
                <a href=""> Аритмология</a>{" "}
              </p>
              <p class="kompany-paragrf">
                {" "}
                <a href=""> Кардиохирургия</a>{" "}
              </p>
              <p class="kompany-paragrf">
                {" "}
                <a href=""> Лабораторная диагностика </a>{" "}
              </p>
              <p class="kompany-paragrf">
                {" "}
                <a href=""> Хирургия</a>{" "}
              </p>
              <p class="kompany-paragrf">
                {" "}
                <a href=""> Эндоурология</a>{" "}
              </p>
              <p class="kompany-paragrf">
                {" "}
                <a href=""> Эндоурология</a>{" "}
              </p>
              <p class="kompany-paragrf">
                {" "}
                <a href=""> Нейрохирургия</a>{" "}
              </p>
              <p class="kompany-paragrf">
                {" "}
                <a href=""> Анестезиология и реанимация</a>{" "}
              </p>
              <p class="kompany-paragrf">
                {" "}
                <a href=""> Диабет</a>{" "}
              </p>
            </div>
            <div class="foote_menu-blog">
              <p class="Kompany-blog-footer"> Услуги </p>
              <p class="kompany-paragrf">
                {" "}
                <a href=""> Сервис</a>{" "}
              </p>
              <p class="kompany-paragrf">
                {" "}
                <a href=""> Регистрации</a>{" "}
              </p>
              <p class="kompany-paragrf">
                {" "}
                <a href=""> Услуги логистики</a>{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
