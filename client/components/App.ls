React = require 'react'
c = React.createElement
saludo = require './jose.ls'

class App extends React.Component
  render: ->
    c 'div', null,
      c 'h1', null, saludo()

module.exports = App
