import Gif from '../Gif/index';

function ListOfGifs({gifs}) {
    return gifs.map(({id, title, url}) =>
              <Gif 
                key={id}
                title={title}
                url={url}
                id={id}
              />
            )
}

export default ListOfGifs;
