import React from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
import GifGridItem from './GifGridItem';
import PropTypes from 'prop-types'

const GifGrid = ({ category }) => {

  const { data:images , loading } = useFetchGifs( category );
  return (
    <>
      <h3> { category} </h3>
     { loading && <p> Loading.. </p> } 
      <div className="card-grid animate__animated animate__heartBeat">
          { images.map( img => {
            return (
                <GifGridItem {...img} key={img.id}/>
            );
          })}
      </div>
    </>
  )
}

GifGrid.propTypes = {
  category: PropTypes.string.isRequired
};

export default GifGrid;