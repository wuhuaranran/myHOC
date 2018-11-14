import React from 'react'

export default class extends React.Component {
    static async getInitialProps() {
        return { data: 0 }
        // if (!process.browser) {
        //     const res = await axios.get('http://api.football-data.org/v1/competitions/426/leagueTable');
        //     // Return properties
        //     return { data: res.data }
        // } else {
        //     const bplData = JSON.parse(sessionStorage.getItem('bpl'));
        //     // Filter and return data based on query
        //     return { data: bplData }
        // }
    }

    componentDidMount() {
    }
    render() {
        return (
            <ul>
                <li>hoc component</li>
                <li>hoc component</li>
                <li>hoc component</li>
                <li>hoc component</li>
                <li>hoc component</li>
            </ul>
        );
    }
}