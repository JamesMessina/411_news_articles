const url = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=306a3a071f224f729829308fa9f5896a'


export const fetchArticles = () => {
    return(dispatch) => {
        fetch(url)
            .then(res => res.json())
            .then(response =>{
                const articleAction = {
                    type: 'FETCH_ARTICLES',
                    value: response.articles
                }
                dispatch(articleAction)
            })
    }
}