import React from "react";

import { data } from "./helper";

export const SectionB = () => {
  return (
    <>
      <header class="header_two">
        <div class="container">
          <div class="servis">
            {data?.map((item) => {
              const { id, title, imageUrl, describtion, buttonName } = item;
              return (
                <div class="server_blog" key={id}>
                  <div>
                    <img src={imageUrl} alt="" />
                  </div>
                  <div className="card_footer">
                    <p class="server_blog_text">{title}</p>
                    <p class="server_blog_tittle">{describtion}</p>
                    <button>{buttonName}</button>
                  </div>
                </div>
              );
            })}
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
