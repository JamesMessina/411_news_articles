const localURL = 'http://localhost:3306/bands'; 

export const fetchBands = () => {
    return(dispatch) => {
        fetch(localURL)
            .then(res => res.json())
            .then(data =>{
                const articleAction = {
                    type: 'FETCH_BANDS',
                    value: data
                }
                console.log(data)
                dispatch(articleAction)
            })
    }
}