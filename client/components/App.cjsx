React = require 'react'
saludo = require './jose.coffee'

class App extends React.Component 
  render: ->
    <div >
      <h1>{saludo()}</h1>
    </div>

module.exports = App
