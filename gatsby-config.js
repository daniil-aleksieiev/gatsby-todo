'use strict'

module.exports = {
  siteMetadata: {
    title: 'Todo List App',
    description: 'TypeScript-based application with MobX as a state management tool.',
    siteUrl: 'https://daniil-aleksieiev.github.io/gatsby-todo',
    author: {
      name: 'Daniil Aleksieiev',
      url: 'https://daniil-aleksieiev.github.io',
      email: 'aleksieiev.daniil@gmail.com'
    }
  },
  plugins: [
    'gatsby-transformer-json',
    'gatsby-plugin-emotion',
    'gatsby-plugin-typescript',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-react-helmet'
  ]
}
