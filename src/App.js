import React from 'react'
import SelectForm from './SelectForm'

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {}
  }
  componentDidMount () {}

  render () {
    return (
      <div>
        <SelectForm items={['チョコ', '梅干し', 'ラムネ']} value='チョコ' />
      </div>
    )
  }
}

export default App
