const url = 'https://musicapp17.herokuapp.com/bands'

export const fetchBands = () => {
    return(dispatch) => {
        fetch(url)
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