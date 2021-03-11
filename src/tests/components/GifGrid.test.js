import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import GifGrid from '../../components/GifGrid';
import { useFetchGifs } from '../../hooks/useFetchGifs';
jest.mock('../../hooks/useFetchGifs');

describe('<GifGrid /> tests', () => {
  const category = 'test category';

  test('<GifGrid /> renders correctly', () => {
    useFetchGifs.mockReturnValue({
      data: [],
      loading: true
    });
    const wrapper = shallow(<GifGrid category={category}/>);
    expect(wrapper).toMatchSnapshot();
  });

  test('<GifGrid /> renders correctly with data', () => {
    const gifs = [{
      title: 'image title',
      url: 'http://testurl.com',
      id: 'ABC'
    }];
    useFetchGifs.mockReturnValue({
      data: gifs,
      loading: false
    });
    const wrapper = shallow(<GifGrid category={category}/>);
    expect( wrapper.find('p').exists() ).toBe(false);
    expect( wrapper.find('GifGridItem').length ).toBe(gifs.length);
  });
});