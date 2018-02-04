import styled from 'styled-components';

import Sprite from './digits.png';

const DIGIT_WIDTH = 13;

const getBackgroundPosition = ({ value }) => {
  if (value === '-') {
    return -DIGIT_WIDTH * 10;
  }
  return -DIGIT_WIDTH * value;
};

const Digit = styled.div`
  width: ${DIGIT_WIDTH}px;
  height: 23px;
  background: url(${Sprite}) no-repeat;
  background-position: ${getBackgroundPosition}px 0;
`;

export default Digit;
