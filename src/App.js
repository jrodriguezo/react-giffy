import './App.css';
import {Route} from 'wouter';
import SearchGifs from './pages/SearchGifs/index'
import Home from './pages/Home/index';

function App() {

  return (
    <div className="App">
      <section className="App-content">
        {/*<Link to='/gifs/simpson'>Gifs de los simpson</Link>*/}
        <Route path="/" component={Home} />
        <Route path="/search/:keyword" component={SearchGifs} />
      </section>
    </div>
  );
}

export default App;
