import React from 'react'
import { Input,Button } from 'antd'

const { TextArea } = Input;
export default class extends React.Component {
  render() {
      return (
          <div>
              <TextArea value={this.props.data} />
          </div>
      );
  }
}