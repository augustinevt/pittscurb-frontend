import React from 'react';
import {
  ExampleHeader,
  ExampleWrapper,
  SubmitButton,
  Wrapper,
} from './SpotSearchCardStyles';

import clockSvg from '../../../common/svgs/clock.svg';

const testSubmit = () => {
  console.log('Spot search submit button clicked');
};

const SpotSearchCard = () => (
  <Wrapper>
    <div className="top-section">
      <h2>
        Pitts
        <span>Curb</span>
      </h2>

      <h4>
        What business are you picking up from?
      </h4>

      <form onSubmit={testSubmit}>
        <input
          type="text"
          placeholder="Search a business, address, or intersection"
        />

        <div className="dropdown-wrapper">
          <img src={clockSvg} alt="" />

          <select name="" id="">
            <option value="asap">
              As soon as possible
            </option>
          </select>
        </div>

        <SubmitButton type="submit">
          Find a spot
        </SubmitButton>
      </form>
    </div>


    <ExampleWrapper>
      <ExampleHeader className="example-header">
        Examples
      </ExampleHeader>

      <div className="example-item">
        <span>Restaurant</span>
        {' '}
        - &quot;Mad Mex, Round Corner&quot;
      </div>

      <div className="example-item">
        <span>Retail</span>
        {' '}
        - &quot;Brambler Boutique&quot;
      </div>

      <div className="example-item">
        <span>Address</span>
        {' '}
        - &quot;502 E. Ohio St., Pittsburgh&quot;
      </div>
    </ExampleWrapper>
  </Wrapper>
);

export default SpotSearchCard;
