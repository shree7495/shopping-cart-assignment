import { useState } from "react";
import "./DropDown.css";
import CategoriesList from "../../server/categories/index.get.json";
function Dropdown({ selected, setSelected }) {
  const [isActive, setIsActive] = useState(false);
  return (
    <div className="dropdown">
      <div className="dropdown-btn" onClick={(e) => setIsActive(!isActive)}>
        {selected}
        <svg
          class="dropdown-icon"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M19 9l-7 7-7-7"
          />
        </svg>
        <span className="fas fa-caret-down"></span>
      </div>
      {isActive && (
        <div className="dropdown-content">
          {CategoriesList.sort((a, b) => a.order - b.order).map((category) => {
            if (category.enabled)
              return (
                <div
                  onClick={(e) => {
                    setSelected(category.name);
                    setIsActive(false);
                  }}
                  className="dropdown-item"
                >
                  {category.name}
                </div>
              );
          })}
        </div>
      )}
    </div>
  );
}

export default Dropdown;
