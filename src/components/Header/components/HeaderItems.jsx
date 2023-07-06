import React from "react";

export const HeaderItems = ({ items }) => {
  return (
    <ul>
      {items?.map((item) => (
        <li key={item.id} className="header_item">
          <div>
            <img src={item.icon} alt="" />
          </div>
          <pre>{item.title && item.title}</pre>
        </li>
      ))}
    </ul>
  );
};
