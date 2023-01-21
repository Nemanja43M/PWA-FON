import React from "react";
import style from "./Home.module.css";

function Home() {
  return (
    <div className={style.box}>
      <img src="download.jfif" alt="logo" />
      <p className={style.p}>Faculty of Organizational Sciences</p>
      <p>Powered by FON 2023</p>
    </div>
  );
}
export default Home;
