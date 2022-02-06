function getGifs({keyword = 'rick'} = {}) {
    console.log(process.env.REACT_APP_API_KEY)
    const API_URL = `https://api.giphy.com/v1/gifs/search?api_key=${process.env.REACT_APP_API_KEY}=${keyword}&limit=10&offset=0&rating=g&lang=es`

    return (
    fetch(API_URL)
        .then(res => res.json())
        .then(response => {
            const {data = []} = response
            if(Array.isArray(data)){
                const gifs = data.map(image => {
                    const {id, title, images} = image
                    const {url} = image.images.downsized
                    return {id, title, url}
                })
                return gifs
            }
        })
    )
}

export default getGifs;
