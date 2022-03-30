import React from "react";
import "./CategoryNavigation.css";
import { useNavigate } from "react-router-dom";
import CategoriesList from "../../server/categories/index.get.json";

export default function CategoryNavigation() {
  let navigate = useNavigate();
  const goTo = (id) => {
    navigate(`/${id}`, true);
  };
  return (
    <div className="categories-navigation">
      {CategoriesList.sort((a, b) => a.order - b.order).map((category) => {
        if (category.enabled)
          return (
            <div
              onClick={() => goTo(category.id)}
              key={category.id}
              className="category-navigation"
            >
              <p>{category.name}</p>
            </div>
          );
      })}
    </div>
  );
}
