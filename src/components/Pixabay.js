import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from "react-redux";
import { useBottomScrollListener } from 'react-bottom-scroll-listener';

import { newSearch, fetchData, reset } from '../actions';

import Search from './Search';
import Images from './Images';
import LastSearches from './LastSearches';

const PixabayStyles = styled.div`
  display: grid;
  grid-template-rows: auto auto 2fr auto;
  grid-template-columns: 1fr;
  min-height: 100vh;
  background: #f7f7f7;
  margin: 0 auto;
  justify-content: center;

  h1 {
    text-align: center;
  }
`;

export default function Pixabay() {
  const dispatch = useDispatch();
  const { data: images, pageNumber, query, isLoading, lastThree } = useSelector(state => state);

  useBottomScrollListener(() => {
    if (images && query) {
      fetchData(query, pageNumber)(dispatch);
    }
  });

  return (
    <PixabayStyles>
      <h1>Walty PixaBay API</h1>
      <LastSearches lastThree={lastThree}/>
      <Search doNewSearch={(values) => dispatch(newSearch(values))} doReset={() => dispatch(reset())}/>
      <Images images={images} query={query} isLoading={isLoading} />
    </PixabayStyles>
  );
}
