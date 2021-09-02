import React from "react";
import Card from "./Home";
import style from "./Home.module.css";

const Home = () => {
  return (
    <main className={style.main}>
      <h1 className={style.h1}></h1>
    <Card/>
    </main>
  );
};

export default Home;