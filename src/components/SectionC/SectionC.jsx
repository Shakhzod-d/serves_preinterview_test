import React from "react";

import vector from "../../assets/img/Vector.svg";
import master from "../../assets/img/master.svg";

export const SectionC = () => {
  return (
    <header>
      <div class="container">
        <div class="master_class">
          <h2>НОВОСТИ</h2>
          <div class="master_class-blog">
            <button class="master_class-carusel">
              <a href="">
                <img src={vector} alt="" />
              </a>
            </button>
            <div class="masteer_blog">
              <img src={master} alt="" />
              <p class="master_blog-text">
                Mастер-класс в исполнении Галлямова Эдуарда Абдулхаевича
              </p>
              <p class="master_blog-date">26.07.2021</p>
              <p class="master_blog-info">
                С 19 по 21 апреля в АО «РСНПМЦУ» (Республиканский
                Специализированный Научно-Практический Медицинский Центр
                Урологии) при поддержке компаний Ethicon Endo Surgery
                (Johnson&Johnson) и ИП ООО «Medical Online Services» был
                проведен мастер-класс в исполнении...
              </p>
              <div class="info_button">
                <button class="master_blog-button">
                  <a href="">Подробнее</a>
                </button>
              </div>
            </div>
            <div class="masteer_blog1">
              <img src={master} alt="" />
              <p class="master_blog-text">
                Mастер-класс в исполнении Галлямова Эдуарда Абдулхаевича
              </p>
              <p class="master_blog-date">26.07.2021</p>
              <p class="master_blog-info">
                С 19 по 21 апреля в АО «РСНПМЦУ» (Республиканский
                Специализированный Научно-Практический Медицинский Центр
                Урологии) при поддержке компаний Ethicon Endo Surgery
                (Johnson&Johnson) и ИП ООО «Medical Online Services» был
                проведен мастер-класс в исполнении...
              </p>
              <div class="info_button">
                <button class="master_blog-button">
                  <a href="">Подробнее</a>
                </button>
              </div>
            </div>
            <div class="masteer_blog2">
              <img src={master} alt="" />
              <p class="master_blog-text">
                Mастер-класс в исполнении Галлямова Эдуарда Абдулхаевича
              </p>
              <p class="master_blog-date">26.07.2021</p>
              <p class="master_blog-info">
                С 19 по 21 апреля в АО «РСНПМЦУ» (Республиканский
                Специализированный Научно-Практический Медицинский Центр
                Урологии) при поддержке компаний Ethicon Endo Surgery
                (Johnson&Johnson) и ИП ООО «Medical Online Services» был
                проведен мастер-класс в исполнении...
              </p>
              <div class="info_button">
                <button class="master_blog-button">
                  <a href="">Подробнее</a>
                </button>
              </div>
            </div>
            <button class="master_class-carusel">
              <a href="">
                <img src="./img/Vector (1).svg" alt="" />
              </a>
            </button>
          </div>
          <div class="news_blog">
            <div class="news_blog-text">
              <p>Посмотреть все новости </p>
              <img src="./img/up-arrow (1) 1.svg" alt="" />
            </div>
            <div class="news_blog-text1">
              <p>Посмотреть все новости </p>
              <img src="./img/up-arrow (2) 1.svg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
