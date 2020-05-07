import * as React from 'react'
import { Link } from 'gatsby'

import IndexProvider from '../layouts'

import { Container } from '../components/Container'
import { TodoCompleted } from '../components/TodoCompleted'

const PageTwo = () => {
  return (
    <IndexProvider>
      <Container>
        <h1>Page 2</h1>

        <TodoCompleted />

        <Link to="/">Back to page 1</Link>
      </Container>
    </IndexProvider>
  )
}

export default PageTwo
