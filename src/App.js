import React from 'react'
import RadioForm from './RadioForm'

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {}
  }
  componentDidMount () {}

  render () {
    return (
      <div>
        <RadioForm items={['チョコ', '梅干し', 'ラムネ']}/>
      </div>
    )
  }
}

export default App
