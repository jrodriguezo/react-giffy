import SearchGifs from "../../components/SearchGifs";
import './styles.css';

function index() {
  return (
      <div className="Home">
          <h1>React - giffy</h1>
          <br />
          <SearchGifs />
      </div>
  )
}

export default index;
