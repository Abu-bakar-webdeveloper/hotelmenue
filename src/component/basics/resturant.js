import React, {useState} from "react";
import "./style.css";
import Menu from "./menuApi.js";
import MenuCard from "./MenuCard";

const Resturant = () => {
  const [menuData , setmenuData] = useState(Menu);
  return (
    <>
    <MenuCard />
    </>
  );
};

export default Resturant;