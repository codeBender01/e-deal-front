import React from "react";
import comics from "../../images/comics.webp";

function CatDropdown(props) {
  // drop.current.style.left = xPos;

  return props.categories.map((cat) => {
    return (
      <li key={cat.id}>
        <h3>{cat.name}</h3>
        <div className="dr-hover">
          <div className="cat-list">
            <h4>Category Name</h4>
            <div className="line"></div>
            <ul>
              {cat.subCats.map((subCat) => {
                return <li key={subCat}>{subCat}</li>;
              })}
            </ul>
          </div>
          <div className="cat-img">
            <img src={comics} alt="comics" />
          </div>
        </div>
      </li>
    );
  });
}

export default CatDropdown;
