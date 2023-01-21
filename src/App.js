import Header from "./Header";
import Home from "./Home";
import style from "./App.module.css";
function App() {
  return (
    <div className={style.App}>
      <Header />
      <Home />
    </div>
  );
}

export default App;
