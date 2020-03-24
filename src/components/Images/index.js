import React, { useState, useEffect, useRef, useCallback } from 'react';
import ImagesStyles from './styles';
import Loading from '../Loading';

const Image = ({ image }) => {
  const [loaded, setLoaded] = useState(false);
  return (
    <>
      {!loaded && (
        <Loading />
      )}
      <div
        style={{ display: loaded ? 'initial' : 'none' }}
      >
        <img
          src={image.webformatURL}
          alt={image.tags}
          onLoad={(e) => {
            setLoaded(true);
          }}
        />
      </div>
    </>
  );
}

export default function Images({ images = [], isLoading }) {
  return (
    <ImagesStyles>
      <section>
        {images.map((image, idx) => {
          if (image.done) {
            return <p>{image.done}</p>;
          } else if(image.noResults) {
            return <p>{image.noResults}</p>;
          }
          return <Image key={idx + image.id} image={image} />;
        })}
      </section>
      {isLoading && (
        <Loading />
      )}
    </ImagesStyles >
  );
}
