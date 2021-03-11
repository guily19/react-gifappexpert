import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import AddCategory from '../../components/AddCategory';

describe('AddCategory', () => {
  it('match the snapshot', () =>{
    const setCategories = jest.fn();
    const wrapper = shallow(<AddCategory setCategories={setCategories} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should change the input content', () =>{
    const setCategories = jest.fn();
    const wrapper = shallow(<AddCategory setCategories={setCategories} />);
    const input = wrapper.find('input');
    input.simulate('change', {target: {value: 'text'}});
    const pElement = wrapper.find('p').text().trim();
    expect(pElement).toBe('text');
  });

  it(' not post on submit', () => {
    const setCategories = jest.fn();
    const wrapper = shallow(<AddCategory setCategories={setCategories} />);
    wrapper.find('form').simulate('submit', { preventDefault : () => {}});
    expect( setCategories ).not.toHaveBeenCalled();
  });

  it('post on submit and clean the input', () => {
    const setCategories = jest.fn();
    const wrapper = shallow(<AddCategory setCategories={setCategories} />);
    const input = wrapper.find('input');
    input.simulate('change', {target: {value: 'text'}});
    wrapper.find('form').simulate('submit', { preventDefault : () => {}});
    expect( setCategories ).toHaveBeenCalled();
    expect( setCategories ).toHaveBeenCalledTimes(1);
    expect( setCategories ).toHaveBeenCalledWith( expect.any(Function));
    expect(input.text()).toBe('');
  });
})