import React, { useState } from "react";
import "./style.css";
import Menu from "./menuApi.js";
import MenuCard from "./MenuCard";
import Navbar from "./Navbar";

const unique = [
  ...new Set(
    Menu.map((currelem) => {
      return currelem.category;
    })
  ), 
  "All",
];

const Resturant = () => {
  const [menuData, setmenuData] = useState(Menu);
  const [menulist, setmenulist] = useState(unique);
 

  const filterItem = (category) => {
    if(category === "All"){
      setmenuData(Menu);
      return;
    }
    const updatedlist = Menu.filter((currelem) => {
      return currelem.category === category;
    });
    setmenuData(updatedlist);
  };
  return (
    <>
      <Navbar menulist={menulist} filterItem={filterItem} />
      <MenuCard menuData={menuData} />
    </>
  );
};

export default Resturant;
