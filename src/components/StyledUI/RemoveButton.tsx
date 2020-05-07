import * as React from 'react'
import styled from '@emotion/styled'

import { dimensions } from '../../styles/variables'

const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  cursor: pointer;
  height: 25px;
  width: 25px;
  font-size: ${dimensions.fontSize.small}px;
  border: none;
  margin-left: 5px;
`

interface ButtonProps {
  onClick?: any
}

export const RemoveButton: React.FC<ButtonProps> = ({ onClick }) => (
  <StyledButton type="button" onClick={onClick}>
    <span role="img" aria-label="delete">
      ❌
    </span>
  </StyledButton>
)
