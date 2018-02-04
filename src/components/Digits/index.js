import React, { PureComponent } from 'react';
import styled from 'styled-components';

import Digit from './Digit';

const Wrapper = styled.div`
  display: flex;
`;

class Digits extends PureComponent {
  render = () => {
    const { count, value } = this.props;

    let digits = value.toString().split('');

    if (digits.length > count) {
      throw new Error();
    }

    if (value < 0 && digits.length - 1 > count) {
      throw new Error();
    }

    while (digits.length < count) {
      digits = ['0', ...digits];
    }

    return (
      <Wrapper className="digits">
        {[...Array(count)].map((e, i) => <Digit key={i} value={digits[i]} />)}
      </Wrapper>
    );
  };
}

export default Digits;
