import React, { Component } from 'react'


class List extends Component {
    
    componentDidMount(){
        this.props.fetchArticles()
    }

    render() {
        return (
            <div>
                {this.props.articles.map(a => {
                    return (
                        <div>
                            <p>{a.band_name}</p>
                            <p>{a.origin}</p>
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default List