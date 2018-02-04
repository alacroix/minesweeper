import React, { Component } from 'react';
import styled from 'styled-components';

import Sprite from './status-face.png';

const StatusFace = styled.div`
  background: url(${Sprite}) no-repeat;
  height: 26px;
  width: 26px;
  margin: 0 auto;

  &.status-face {
    &--won {
      background-position: -104px 0;
    }
    &--lost {
      background-position: -78px 0;
    }
  }

  &:active {
    background-position: -26px 0;
  }
`;

export default StatusFace;
