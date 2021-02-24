import React from 'react';
import { shallow } from 'enzyme';
import AddCategory from '../../components/AddCategory';

describe('AddCategory', () => {
  it('match the snapshot', () =>{
    const setCategories = jest.fn();
    const wrapper = shallow(<AddCategory setCategories={setCategories} />);
    expect(wrapper).toMatchSnapshot();
  })

  it('should change the input content', () =>{
    const setCategories = jest.fn();
    const wrapper = shallow(<AddCategory setCategories={setCategories} />);
    const input = wrapper.find('input');
    const inputValue = wrapper.find('input').prop('value');
    input.simulate('change', {target: {value: 'text'}});
    wrapper.update();
    expect(inputValue).toBe('text');
  })
})