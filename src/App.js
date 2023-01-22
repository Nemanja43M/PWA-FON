import Header from "./Header";
// import Home from "./Home";
import style from "./App.module.css";
import MovieList from "./MovieList";
// import MovieCard from "./MovieCard";

function App() {
  return (
    <div className={style.App}>
      <Header />
      {/* <Home />
      <MovieCard /> */}
      <div className="container">
        <MovieList />
      </div>
    </div>
  );
}

export default App;
