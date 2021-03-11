import { shallow } from 'enzyme';
import { GifExpertApp } from '../GifExpertApp';

describe('<GifExpertApp />', () => {

  test('<GifExpertApp /> renders', () => {
    const wrapper = shallow(<GifExpertApp />);
    expect( wrapper ).toMatchSnapshot();
  });

  test('<GifExpertApp /> renders with defaultCategories', () => {
    const wrapper = shallow(<GifExpertApp defaultCategories={['Cat1','Cat2']}/>);
    expect( wrapper ).toMatchSnapshot();
    expect( wrapper.find('GifGrid').length).toBe(2);
  });
});