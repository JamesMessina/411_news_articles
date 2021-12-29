import React, { Component } from 'react'


class List extends Component {

    
    componentDidMount(){
        this.props.fetchBands()
    }

    render() {
        return (
            <div>
                {this.props.bands.map((b, idx) => {
                    return (
                        <div key={idx}>
                            <h1>{b.band_name}</h1>
                            <p>{b.currentMembers}</p>
                            <h6>{b.yearsActive}</h6>
                            <hr></hr>
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default List