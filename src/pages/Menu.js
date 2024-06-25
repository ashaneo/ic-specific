import React from "react";
import { MenuList } from "../helpers/menuList";
import MenuItem from "../components/MenuItem";
import "../styles/Menu.css";

function Menu() {
  return (
    <div className="menu">
      <h1 className="menuTitle">Our Menu</h1>
      <div className="menuList">
        {MenuList.map((menuItem, key) => {
          return (
            <div className="menuItem" key={key}>
              <MenuItem
                key={key}
                image={menuItem.image}
                name={menuItem.name}
                price={menuItem.price}
              />
              ;
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Menu;
