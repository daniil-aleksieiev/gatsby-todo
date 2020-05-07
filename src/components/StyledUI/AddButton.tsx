import * as React from 'react'
import styled from '@emotion/styled'

import { colors, dimensions, heights } from '../../styles/variables'

const StyledButton = styled.button`
  cursor: pointer;
  position: absolute;
  right: 0;
  height: 100%;
  width: 100%;
  max-width: ${heights.input}px;
  font-size: ${dimensions.fontSize.small}px;
  background-color: ${colors.success};
  color: ${colors.white};
  text-align: center;
  font-weight: bold;
  letter-spacing: 1px;
  border: none;
  transition: opacity 0.3s ease;
  &:hover {
    opacity: 0.8;
  }
`

interface ButtonProps {
  onClick?: any
}

export const AddButton: React.FC<ButtonProps> = ({ onClick }) => (
  <StyledButton type="button" onClick={onClick}>
    ADD
  </StyledButton>
)
