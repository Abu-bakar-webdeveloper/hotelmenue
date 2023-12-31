import React from "react";

const MenuCard = ({ menuData }) => {
  return (
    <>
      <section className="main-card-cointainer">
        {menuData.map((currelem) => {
          const {id, image, name, category, price, description} = currelem;
          return (
            <>
              <div className="card-container" key={id}>
                <div className="card">
                  <div className="card-body">
                    <span className="card-number card-circle subtle">{id}</span>
                    <span className="card-author subtle">{category}</span>
                    <h2 className="card-title">{name}</h2>
                    <span className="card-description subtle">
                     {description}
                    </span>
                    <div className="card-read">Read more</div>
                  </div>
                  <img src={currelem.image} alt="images" className="card-media"/>
                  <span className="card-tag subtle">Order Now</span>
                </div>
              </div>
            </>
          );
        })}
      </section>
    </>
  );
};

export default MenuCard;
