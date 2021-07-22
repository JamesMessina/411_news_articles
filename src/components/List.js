import React, { Component } from 'react'


class List extends Component {

    
    componentDidMount(){
        this.props.fetchArticles()
    }

    render() {
        return (
            <div>
                {this.props.articles.map((a, idx) => {
                    return (
                        <div key={idx}>
                            <h1>{a.band_name}</h1>
                            <p>{a.currentMembers}</p>
                            <h6>{a.yearsActive}</h6>
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default List