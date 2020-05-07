import * as React from 'react'
import { Link } from 'gatsby'

import IndexProvider from '../layouts'

import { Container } from '../components/Container'
import { TodoList } from '../components/TodoList'
import { TodoAdd } from '../components/TodoAdd'

const IndexPage = () => {
  return (
    <IndexProvider>
      <Container>
        <h1>Page 1</h1>

        <TodoAdd />

        <TodoList />

        <Link to="/page-2/">Go to page 2</Link>
      </Container>
    </IndexProvider>
  )
}

export default IndexPage
