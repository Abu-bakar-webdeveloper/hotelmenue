import React from 'react'

const Navbar = ({filterItem, menulist}) => {
  return (
    <>
    <nav className="navbar">
        <div className="btn-group">
          {menulist.map((currelem) => {
            return(<button
              className="btn-group__item"
              onClick={() => filterItem(currelem)}
            >
              {currelem}
            </button>);
          })}
        </div>
      </nav>
    </>
  )
}

export default Navbar