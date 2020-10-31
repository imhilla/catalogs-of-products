import React from 'react';
import { v4 as uuidv4 } from 'uuid';

const categories = ["CATEGORIES", 'poison', 'fire', 'water', 'bug', 'normal', 'electric', 'ground', 'grass', 'psychic', 'rock', 'fighting'];
const renderCategories = categories.map(item => (
  <option key={uuidv4()} value={item}>{item}</option>
));

const CategoryFilter = ({ filter = 'All', handleFilterChange }) => (
  <div className="panel-bg">
    <div className="second-panel">
      <div className="categories">
        <select
          id="inputGroupSelect01"
          value={filter}
          onChange={handleFilterChange}
          className="CATEGORIES"
        >
          {renderCategories}
        </select>
      </div>
    </div>
  </div>
);

export default CategoryFilter;
