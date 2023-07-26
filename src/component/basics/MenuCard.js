import React from 'react';

const MenuCard = () => {
  return (
    <>
    <div className="card-container">
      <div className="card">
        <div className="card-body">
          <span className="card-number card-circle subtle">1</span>
          <span className="card-author subtle">Breakfast</span>
          <span className="card-description subtle">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia,
            possimus nostrum natus ex voluptate inventore eaque iusto ipsa
            placeat, explicabo eum cupiditate tempora fugit quasi repudiandae
            quas excepturi, cumque beatae? Et eligendi est provident
          </span>
          <div className="card-read">Read more</div>
        </div>
        {/* <img src={image} alt="images" className="card-media"/> */}
        <span className="card-tag subtle">Order Now</span>
      </div>
    </div>
    </>
  )
}

export default MenuCard;