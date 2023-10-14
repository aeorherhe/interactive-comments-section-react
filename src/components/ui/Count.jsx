/* eslint-disable react/prop-types */
import styled from "styled-components";
import { useState } from "react";

const Count = ({ score }) => {
  const [count, setCount] = useState(score);

  const handleDec = () => {
    if (count === 0) return;
    setCount((count) => count - 1);
  };

  return (
    <StyledCount>
      <button
        className="count-btn btn"
        onClick={() => setCount((count) => count + 1)}
      >
        +
      </button>
      <p className="count">{count}</p>
      <button className="count-btn btn" onClick={handleDec}>
        -
      </button>
    </StyledCount>
  );
};
export default Count;

/********************* styled component *************************/
/********************* styled component *************************/

const StyledCount = styled.div`
  width: fit-content;
  padding: 0.5rem;
  border-radius: var(--border-radius);
  background-color: var(--Very-light-gray);
  align-self: flex-start;

  .count-btn {
    font-weight: 700;
    color: var(--Light-grayish-blue);
  }

  .count {
    color: var(--Moderate-blue);
    font-weight: 700;
    margin: 0.5rem 0;
  }
`;
