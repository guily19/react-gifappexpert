import { getGifs } from '../../helpers/getGifs';

describe('getGifs', () => {
  it('at least 1 element', async () => {
    const gifs = await getGifs('test');
    expect( gifs.length ).toBe(1);
  })

  it('0 elements if there is no category', async () => {
    const gifs = await getGifs('');
    expect( gifs.length ).toBe(0);
  })
})