import * as React from 'react'
import styled from '@emotion/styled'

import { dimensions, heights } from '../../styles/variables'

const StyledInput = styled.input`
  padding: 0 60px 0 15px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 100%;
  height: ${heights.input}px;
  font-size: ${dimensions.fontSize.large}px;
  line-height: ${dimensions.lineHeight.regular};
  outline: none;
`

interface InputProps {
  className?: string
  value?: string
  onKeyDown?: any
  onChange?: any
}

export const Input: React.FC<InputProps> = ({ className, value, onKeyDown, onChange }) => (
  <StyledInput type="text" className={className} value={value} onKeyDown={onKeyDown} onChange={onChange} placeholder="Type text to add" />
)
