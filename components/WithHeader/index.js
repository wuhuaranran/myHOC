import React from 'react'

function getDisplayName(component) {
    return component.displayName || component.name || 'Component';
}

export default function withHeader(WrappedComponent, title) {
    return class HOC extends React.Component {
        static displayName = `HOC(${getDisplayName(WrappedComponent)})`
        render() {
            const data = '我是高阶组件传给普通组件的props';
            const newProps = {
                test: 'hoc'
            }
            return (
                <div>
                    <div className="demo-header">
                        {title?title:'我是标题-高阶组件'}
                    </div>
                    <WrappedComponent data={data} {...this.props} {...newProps} />
                </div>
            )
        }
    }
}