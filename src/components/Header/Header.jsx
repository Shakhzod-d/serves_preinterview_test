import React from "react";

import { headerLeftArr } from "./helper";
import "./Header.css";

export const Header = () => {
  return (
    <div className="header_container">
      <div className="left_header">
        <ul>
          {headerLeftArr?.map((item) => (
            <li key={item.id} className="header_item">
              <div>
                <img src={item.icon} alt="" />
              </div>
              <pre>{item.title && item.title}</pre>
            </li>
          ))}
        </ul>
      </div>
      <div></div>
    </div>
  );
};
