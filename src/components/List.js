import React, {useEffect} from 'react';
import ReactDOM from 'react-dom';
import Button from '@mui/material/Button';

function List(props) {

    
    useEffect(() =>{
        console.log("effect called")
        props.fetchBands()
    },[]);

    return (
        <div>
            <Button variant="text">Text</Button>
            {props.bands.map((b, idx) => {
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

export default List