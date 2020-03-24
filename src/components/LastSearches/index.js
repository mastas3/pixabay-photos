import React from 'react';
import LastSearchesStyles from './styles';

export default function LastSearches({ lastThree }) {
  return (
    <LastSearchesStyles>
      <p>Last 3 searches: {lastThree.join(', ')}</p>
    </LastSearchesStyles>
  );
}
