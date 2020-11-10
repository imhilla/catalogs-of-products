import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import CategoryFilter from '../../categoryFilter';

it('renders without crushing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<CategoryFilter />, div);
});

describe('<CategoryFilter />', () => {
  describe('render()', () => {
    const component = shallow(<CategoryFilter />);
    expect(toJson(component)).toMatchSnapshot();
  });
});
