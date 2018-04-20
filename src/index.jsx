import React, { Component } from 'react'
import png from './images/test.png'
import './index.less'

class Demo extends Component {
  render() {
    return (
      <div>
        <img src={png} alt="test.png"/>
        <div className="demo">demo</div>
      </div>
    )
  }
}

export default Demo