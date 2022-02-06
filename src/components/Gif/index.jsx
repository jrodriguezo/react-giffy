import './styles.css';

function Gif({title, url, id}) {
  return (
      <div className="Gif">
        <div className="column">
            <h4>{title}</h4>
            <img alt={title} src={url}/>
        </div>
      </div>
    )
}

export default Gif;
