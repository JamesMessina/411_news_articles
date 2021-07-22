const url = 'http://127.0.0.1:3306/bands'

export const fetchArticles = () => {
    return(dispatch) => {
        fetch(url)
            .then(res => res.json())
            .then(data =>{
                const articleAction = {
                    type: 'FETCH_ARTICLES',
                    value: data
                }
                console.log(data)
                dispatch(articleAction)
            })
    }
}