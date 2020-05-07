import * as React from 'react'
import styled from '@emotion/styled'

import { colors } from '../../styles/variables'

const StyledCheckbox = styled.input`
  height: 15px;
  width: 15px;
  margin: 0 auto;
  -webkit-appearance: none;
  border: 1px solid #ccc;
  &[checked] {
    background-color: ${colors.success};
    border-color: ${colors.black};
  }
`

interface ButtonProps {
  onChange?: any
  defaultChecked: boolean
}

export const Checkbox: React.FC<ButtonProps> = ({ onChange, defaultChecked }) => (
  <StyledCheckbox type="checkbox" defaultChecked={defaultChecked} onChange={onChange} />
)
