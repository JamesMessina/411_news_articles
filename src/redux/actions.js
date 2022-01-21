const API = 'https://musicapp17.herokuapp.com/bands'; 

export const fetchBands = () => {
    return(dispatch) => {
        fetch(API)
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