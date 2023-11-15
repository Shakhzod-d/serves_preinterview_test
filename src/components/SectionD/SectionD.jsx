import React from "react";

import one from "../../assets/img/1.png";
import two from "../../assets/img/2.png";
import three from "../../assets/img/3.png";
import four from "../../assets/img/4.png";
import five from "../../assets/img/5.svg";
import six from "../../assets/img/6.svg";
import seven from "../../assets/img/7.svg";
import eight from "../../assets/img/8.svg";
import vector from "../../assets/img/Vector.svg";
import vector_1 from "../../assets/img/right_arrow.svg";

export const SectionD = () => {
  return (
    <section>
      <div class="container">
        <div class="partner_logo">
          <h2>ПАРТНЕРЫ</h2>
          <div class="partner_logo_info">
            <div class="logo_botton">
              <div class="logos">
                <button class="master_class-carusel">
                  <a href="">
                    <img src={vector} alt="" />
                  </a>
                </button>
              </div>
              <div class="imgs_logo">
                <div class="img_logo">
                  {" "}
                  <img src={one} alt="" />
                </div>
                <div class="img_logo">
                  {" "}
                  <img src={two} alt="" />
                </div>
                <div class="img_logo">
                  {" "}
                  <img src={three} alt="" />
                </div>
                <div class="img_logo">
                  {" "}
                  <img src={four} alt="" />
                </div>
                <div class="img_logo1">
                  {" "}
                  <img src={five} alt="" />
                </div>
                <div class="img_logo2">
                  {" "}
                  <img src={six} alt="" />
                </div>
                <div class="img_logo3">
                  {" "}
                  <img src={seven} alt="" />
                </div>
                <div class="img_logo4">
                  {" "}
                  <img src={eight} alt="" />
                </div>
              </div>
              <div class="logos">
                <button class="master_class-carusel">
                  <a href="">
                    <img src={vector_1} alt="" />
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
