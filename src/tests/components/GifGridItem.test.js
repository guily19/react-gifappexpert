import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import GifGridItem from '../../components/GifGridItem';

describe('<GifGridItem />', () => {

  it('renders with title', () => {
    const props = {
      title: 'image title',
      url: 'testurl.com'
    } 
    const wrapper = shallow(<GifGridItem {...props}/>);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('title must be the p element', () => {
    const props = {
      title: 'image title',
      url: 'testurl.com'
    } 
    const wrapper = shallow(<GifGridItem {...props}/>);
    const pElement = wrapper.find('p');
    expect(pElement.text()).toEqual(props.title);
  });

  it('image has to be url and title from props', () => {
    const props = {
      title: 'image title',
      url: 'testurl.com'
    } 
    const wrapper = shallow(<GifGridItem {...props}/>);
    const imgElement = wrapper.find('img');
    expect(imgElement.prop('alt')).toEqual(props.title);
    expect(imgElement.prop('src')).toEqual(props.url);
  });

  it('div has to be at least class card', () => {
    const props = {
      title: 'image title',
      url: 'testurl.com'
    } 
    const wrapper = shallow(<GifGridItem {...props}/>);
    const divElement = wrapper.find('div');
    const className = divElement.prop('className');
    expect(className.includes('card')).toBe(true);
  });


});