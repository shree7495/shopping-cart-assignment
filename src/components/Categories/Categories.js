import React, { useState, useEffect } from "react";
import "../Categories/Categories.css";
import { useNavigate } from "react-router-dom";
import Button from "../Button/Button";

import beverages from "../../images/category/beverages.png";
import baby from "../../images/category/baby.png";
import bakery from "../../images/category/bakery.png";
import beauty from "../../images/category/beauty.png";
import fruits from "../../images/category/fruits.png";

export default function Categories() {
  const [categoriesData, setCategoriesData] = useState([]);
  console.log("categories page");
  let navigate = useNavigate();
  const goPLPPage = (id) => {
    console.log("go to product landing page");
    navigate(`/${id}`);
  };
  useEffect(() => {
    setCategoriesData([
      {
        name: "Beverages",
        key: "beverages",
        description:
          "Our beverage department will ensure your fridge is always fully stocked. Shop for soda, juice, beer and more. ",
        enabled: true,
        order: 3,
        imageUrl: `${beverages}`,
        id: "5b675e5e5936635728f9fc30",
      },
      {
        name: "Bakery Cakes and Dairy",
        key: "bakery-cakes-dairy",
        description:
          "The best cupcakes, cookies, cakes, pies, cheesecakes, fresh bread, biscotti, muffins, bagels, fresh coffee, milk and more.",
        enabled: true,
        order: 2,
        imageUrl: `${bakery}`,
        id: "5b6899123d1a866534f516de",
      },
      {
        name: "Beauty and Hygiene",
        key: "beauty-hygiene",
        description:
          "Buy beauty and personal care products online in India at best prices.",
        enabled: true,
        order: 4,
        imageUrl: `${beauty}`,
        id: "5b68994e3d1a866534f516df",
      },
      {
        name: "Baby Care",
        key: "baby",
        description:
          "Shop online for Baby Products, Diapers, Skin Care Products,etc.",
        enabled: true,
        order: 5,
        imageUrl: `${baby}`,
        id: "5b6899683d1a866534f516e0",
      },
      {
        name: "Seafood",
        key: "seafood",
        description: "Great place to buy fresh seafood.",
        enabled: false,
        order: -1,
        id: "5b68997d3d1a866534f516e1",
      },
      {
        name: "Fruits & Vegetables",
        key: "fruit-and-veg",
        description: "A variety of fresh fruits and vegetables.",
        enabled: true,
        order: 1,
        imageUrl: `${fruits}`,
        id: "5b6899953d1a866534f516e2",
      },
    ]);
  }, []);
  return (
    <div className="categories-container">
      {categoriesData
        .sort((a, b) => a.order - b.order)
        .map((category) => {
          if (category.enabled)
            return (
              <div key={category.id} className="category-containner">
                <div className="category-textData">
                  <h3>{category.name}</h3>
                  <span>{category.description}</span>
                  <Button HandleOnClick={() => goPLPPage(category.id)}>
                    Explore {category.key}
                  </Button>
                </div>
                <img src={category.imageUrl} alt="cat-details" />
              </div>
            );
        })}
    </div>
  );
}
