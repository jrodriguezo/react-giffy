import './Gif.css';

function Gif({title, url, id}) {
  return (
      <div className="Gif">
          <h4>{title}</h4>
          <small>{id}</small>
          <img alt={title} src={url}/>
      </div>
    )
}

export default Gif;
