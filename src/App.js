import Header from "./Header";
import Home from "./Home";
import style from "./App.module.css";
import MovieList from "./MovieList";
// import MovieCard from "./MovieCard";
import { BrowserRouter, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className={style.App}>
        <Header />
        <Route path="/" exact={true} component={Home}></Route>
        <div className="container">
          <Route path="/movies" component={MovieList}></Route>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
