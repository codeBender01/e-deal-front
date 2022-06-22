import React from "react";
import "./categories.scss";

const categories = [
  {
    id: 1,
    name: "Home",
  },
  {
    id: 2,
    name: "Saved",
  },
  {
    id: 3,
    name: "Motors",
  },
  {
    id: 4,
    name: "Electronics",
  },
  {
    id: 5,
    name: "Collectibles & Art",
  },
  {
    id: 6,
    name: "Home & Garden",
  },
  {
    id: 7,
    name: "Clothing & Accesories",
  },
  {
    id: 8,
    name: "Toys",
  },
  {
    id: 9,
    name: "Sport",
  },
  {
    id: 10,
    name: "Business & Industrial",
  },
  {
    id: 11,
    name: "Jewelry & Watches",
  },
];

function Categories() {
  const renderedCategories = () => {
    return categories.map((cat) => {
      return <li key={cat.id}>{cat.name}</li>;
    });
  };
  return (
    <div className="categories">
      <div className="container">
        <ul>{renderedCategories()}</ul>
      </div>
    </div>
  );
}

export default Categories;
