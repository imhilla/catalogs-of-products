import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';

const categories = ['CATEGORIES', 'poison', 'fire', 'flying', 'water', 'bug', 'normal', 'electric', 'ground', 'grass', 'psychic', 'rock', 'fighting'];
const renderCategories = categories.map(item => (
  <option key={uuidv4()} value={item}>{item}</option>
));

const CategoryFilter = ({ filter = 'All', handleFilterChange }) => (
  <div>
    <div>
      <div>
        <select
          value={filter}
          onChange={handleFilterChange}
        >
          {renderCategories}
        </select>
      </div>
    </div>
  </div>
);

CategoryFilter.propTypes = {
  handleFilterChange: PropTypes.func,
  filter: PropTypes.string,
};

CategoryFilter.defaultProps = {
  handleFilterChange: () => { },
  filter: 'All',
};

export default CategoryFilter;
