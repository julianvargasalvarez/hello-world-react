React = require 'react'

class App extends React.Component
  render: ->
    React.createElement 'div', null,
      React.createElement('h1', null, "Hello World")

module.exports = App
