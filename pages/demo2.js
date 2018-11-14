import React from 'react'
import Demo from '../components/Header';
import withHeader from '../components/WithHeader'

const EnhanceDemo = withHeader(Demo,'Demo2标题');

export default class extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
    }

    render() {
        const style = {
            width: '100%',
            textAlign: 'center',
            title: {
                color: 'red'
            }
        }
        return (
            <div style={style}>
                <h1 style={style.title}>Demo2</h1>
                <EnhanceDemo />
            </div>
        );
    }
}