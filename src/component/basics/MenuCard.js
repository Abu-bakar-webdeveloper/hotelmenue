import React from "react";

const MenuCard = ({ menuData }) => {
  return (
    <>
      <section className="main-card-cointainer">
        {menuData.map((currelem) => {
          return (
            <>
              <div className="card-container" key={currelem.id}>
                <div className="card">
                  <div className="card-body">
                    <span className="card-number card-circle subtle">{currelem.id}</span>
                    <span className="card-author subtle">{currelem.category}</span>
                    <h2 className="card-title">{currelem.name}</h2>
                    <span className="card-description subtle">
                     {currelem.description}
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
