import React from 'react'

export default class HeaderDemo extends React.Component {
    render() {
        const { data, test} = this.props;
        return (
            <div>
                我是一个普通组件
                <p>{data}</p>
                <p>{test}</p>
            </div>
        );
    }
}