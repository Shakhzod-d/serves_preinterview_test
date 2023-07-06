import React from "react";

import frame_7 from "../../assets/img/Frame 7.svg";
import man from "../../assets/img/man-by-truck-guy-delivery-uniform-man-with-clipboard 1.svg";
import servce from "../../assets/img/servic 1.svg";

export const SectionB = () => {
  return (
    <>
      <header class="header_two">
        <div class="container">
          <div class="servis">
            <div class="server_blog">
              <img src={servce} alt="" />
              <p class="server_blog_text">СЕРВИС ОБОРУДОВАНИЯ</p>
              <p class="server_blog_tittle">
                Компания предоставляет сервисное обслуживание по всем
                предоставляемым продуктам. У наших инженеров имеется опыт и
                сертификаты фирм производителей......
              </p>
              <button>Подробнее</button>
            </div>
            <div class="server_blog">
              <img src={frame_7} alt="" />
              <p class="server_blog_text">РЕГИСТРАЦИИ</p>
              <p class="server_blog_tittle">
                Обеспечение получения разрешительных документов,
                регистрационного удостоверения на изделия медицинского
                назначения Подготовка объектов к проведению ....
              </p>
              <button>Подробнее</button>
            </div>
            <div class="server_blog">
              <img src={man} alt="" />
              <p class="server_blog_text">УСЛУГИ ЛОГИСТИКИ</p>
              <p class="server_blog_tittle">
                Компания предоставляет сервисное обслуживание по всем
                предоставляемым продуктам. У наших инженеров имеется опыт и
                сертификаты фирм производителей.....
              </p>
              <button>Подробнее</button>
            </div>
          </div>
        </div>
      </header>

      <section>
        <div class="container">
          <div class="kompany">
            <h2>О КОМПАНИИ</h2>
            <div class="kompany_blog">
              <div class="blog_tittle">
                <p>
                  Группа компаний MEDOL создавалась высококвалифицированными
                  специалистами в сфере медицины, инженерии и экономики, за
                  плечами которых значительный опыт на рынке высоких медицинских
                  технологий, которая имеет свои представительства в разных
                  уголках Земли. В 2011 году MEDOL зарегистрировал в Узбекистане
                  ИП ООО “Medical Online Services". Цель компании построить
                  прозрачный долгосрочный бизнес, принести пользу обществу путем
                  развития и внедрения передовых технологий в систему
                  здравоохранения Республики Узбекистан.{" "}
                </p>
                <button>Узнать больше</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
