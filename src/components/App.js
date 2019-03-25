import React, { Component } from 'react'
import { observer } from 'mobx-react'

@observer
class App extends Component {
  render() {
    console.log(this.props)
    return (
      <div>
        zhangxing
      </div>
    )
  }
}
export default App
