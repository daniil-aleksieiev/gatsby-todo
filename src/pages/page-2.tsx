import * as React from 'react'
import { Link } from 'gatsby'

import IndexProvider from '../layouts'

import { TodoCompleted } from '../components/TodoCompleted'

const PageTwo = () => {
  return (
    <IndexProvider>
      <h1>Page 2</h1>

      <TodoCompleted />

      <Link to="/">Take me back home.</Link>
    </IndexProvider>
  )
}

export default PageTwo
