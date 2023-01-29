import Header from "./Header";
import Home from "./Home";
import style from "./App.module.css";
import MovieList from "./MovieList";
// import MovieCard from "./MovieCard";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { useState } from "react";

function App() {
  const [search, setSearch] = useState();

  return (
    <BrowserRouter>
      <div className={style.App}>
        <Header setSearch={setSearch} />
        <Switch>
          <Route path="/" exact={true} component={Home}></Route>
          <div className="container">
            <Route
              path="/movies"
              render={() => <MovieList search={search} />}
            ></Route>
          </div>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
