import React from "react";
import { data } from "../data";
import "../App.css";
// import {getArticle} from "../data"
import { NavLink, Outlet } from "react-router-dom";
import moment from "moment";

export default function Articles() {
  let articles = data();

  let dates = articles.published_at;
  let changeDate = moment(dates).format("MMM DD, YYYY");

  return (
    <div>
      <section className="article-main">
        <h1>Articles</h1>

        <div className="article">
          {articles.map((item) => (
            <NavLink to={`/article/${item.id}`} key={item.id} className="links">
              <div className="card">
                <div className="items">
                  <h3> Author: {item.author} </h3>
                  <h2>{item.title}</h2>
                  <p>{item.description.slice(0, 200)} ...</p>
                </div>

                <div className="images">
                  <img src={item.image} alt="pic" />
                </div>
              </div>
            </NavLink>
          ))}
        </div>

        <Outlet />
      </section>
    </div>
  );
}
