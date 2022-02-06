import './App.css';
import {Link, Route} from 'wouter';

import ListOfGifs from './components/ListOfGifs';
import SearchGifs from './components/SearchGifs';

function App() {

  return (
    <div className="App">
      <section className="App-content">
        <h1>React - giffy</h1>
        <SearchGifs />
        <Link to='/gifs/simpson'>Gifs de los simpson</Link>
        <Route path="/gifs/:keyword" component={ListOfGifs} />
      </section>
    </div>
  );
}

export default App;
