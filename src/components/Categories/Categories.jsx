import React from "react";
import CatDropdown from "./CatDropdown";
import "./categories.scss";

const categories = [
  {
    id: 1,
    name: "Home",
    subCats: [
      "Art",
      "Coins & paper money",
      "Comics",
      "Collectible card games",
      "Bullion",
      "Sport trading cards",
      "Antiques",
    ],
  },
  {
    id: 2,
    name: "Saved",
    subCats: [
      "Art",
      "Coins & paper money",
      "Comics",
      "Collectible card games",
      "Bullion",
      "Sport trading cards",
      "Antiques",
    ],
  },
  {
    id: 3,
    name: "Motors",
    subCats: [
      "Art",
      "Coins & paper money",
      "Comics",
      "Collectible card games",
      "Bullion",
      "Sport trading cards",
      "Antiques",
    ],
  },
  {
    id: 4,
    name: "Electronics",
    subCats: [
      "Art",
      "Coins & paper money",
      "Comics",
      "Collectible card games",
      "Bullion",
      "Sport trading cards",
      "Antiques",
    ],
  },
  {
    id: 5,
    name: "Collectibles & Art",
    subCats: [
      "Art",
      "Coins & paper money",
      "Comics",
      "Collectible card games",
      "Bullion",
      "Sport trading cards",
      "Antiques",
    ],
  },
  {
    id: 6,
    name: "Home & Garden",
    subCats: [
      "Art",
      "Coins & paper money",
      "Comics",
      "Collectible card games",
      "Bullion",
      "Sport trading cards",
      "Antiques",
    ],
  },
  {
    id: 7,
    name: "Clothing & Accesories",
    subCats: [
      "Art",
      "Coins & paper money",
      "Comics",
      "Collectible card games",
      "Bullion",
      "Sport trading cards",
      "Antiques",
    ],
  },
  {
    id: 8,
    name: "Toys",
    subCats: [
      "Art",
      "Coins & paper money",
      "Comics",
      "Collectible card games",
      "Bullion",
      "Sport trading cards",
      "Antiques",
    ],
  },
  {
    id: 9,
    name: "Sport",
    subCats: [
      "Art",
      "Coins & paper money",
      "Comics",
      "Collectible card games",
      "Bullion",
      "Sport trading cards",
      "Antiques",
    ],
  },
  {
    id: 10,
    name: "Business & Industrial",
    subCats: [
      "Art",
      "Coins & paper money",
      "Comics",
      "Collectible card games",
      "Bullion",
      "Sport trading cards",
      "Antiques",
    ],
  },
  // {
  //   id: 11,
  //   name: "Jewelry & Watches",
  //   subCats: [
  //     "Art",
  //     "Coins & paper money",
  //     "Comics",
  //     "Collectible card games",
  //     "Bullion",
  //     "Sport trading cards",
  //     "Antiques",
  //   ],
  // },
];

function Categories() {
  return (
    <div className="categories">
      <div className="container">
        <ul className="main-cats">
          <CatDropdown categories={categories} />
        </ul>
      </div>
    </div>
  );
}

export default Categories;
