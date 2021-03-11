import { useFetchGifs } from '../../hooks/useFetchGifs';
import { renderHook } from '@testing-library/react-hooks';

describe('useFetchGifs', () => {
  test('it has to return the initial state', () => {
    const { result } = renderHook( () => { useFetchGifs( 'Test Category' ) } );
    console.log(result);
    console.log(result.all);
    console.log(result.error);
    console.log(result.current);
    const { data, loading } = result.current;
    expect( data ).toBe([]);
    expect( loading ).toBe( true );

  });

});