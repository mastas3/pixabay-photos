import React from 'react';
import { CircleLoader } from 'react-spinners';
import styled from 'styled-components';

const LoadingStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 300px;
  width: 100%;
  position: relative;
`;

export default function Loading() {
  return (
    <LoadingStyle>
      <CircleLoader color="#333" />
    </LoadingStyle>
  );
}
