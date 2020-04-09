import React from 'react';
import DotLoader from 'react-spinners/DotLoader';
import { css } from '@emotion/core';

const override = css`
  display: inline-block;
  margin: auto;
  max-width: 100%;
`;

function LoadingSpinner() {
  return (
    <div className="spinner--blocker">
      <div className="spinner--container">
        <DotLoader
          css={override}
          size={100} // or 150px
          color={'#a10000'}
          loading={true}
        />
      </div>
    </div>
  );
}

export default LoadingSpinner;
