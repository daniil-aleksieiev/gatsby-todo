import * as React from 'react'
import styled from '@emotion/styled'

const StyledItem = styled.li`
  display: flex;
  justify-content: space-between;
  margin: 0 0 15px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
`

interface ItemProps {
  children: any
}

export const ListItemWrapper: React.FC<ItemProps> = ({ children }) => <StyledItem>{children}</StyledItem>
