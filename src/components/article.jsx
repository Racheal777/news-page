import React, { useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { getArticle } from "../data";
import { data } from "../data";
import moment from "moment";
import Form from "./form";
import { Toggle } from "./form";

export default function Article() {
  //making use of the useParams feature in react by assigning it to a variable called params
  //params id come as a string thus it need to be changed to an integer with the use of parseInt
  //parseInt takes two argument which is the id and the base root
  //changed the format of the date with the use of moment.js which was installed and now imported
  //changed the format to month, date, year
  let params = useParams();
  let article = getArticle(parseInt(params.articleId, 10));
  let dates = article.published_at;
  let changeDate = moment(dates).format("MMM DD, YYYY");

  //articles data
  let articles = data();
  // console.log(changeDate)

  //filtering the articles data to display the rest of the data that was not clicked
  //declared a global variable and then assigned the articles data filtering
  //filtering with the id to make sure the id to be displayed are not the same id
  //as the article id which has been declared on top
  let filtered = [];
  const filteredList = () => {
    filtered = articles.filter((list) => list.id !== article.id);

    // console.log(filtered);
  };

  filteredList();

  //state for the button
  const [likes, setLikes] = useState(0);
  const [votes, setVotes] = useState(0);

  const Add = () => {
    setLikes(likes + 1);
  };

  //vote
  const Addvote = () => {
    setVotes(votes + 1);
    // console.log(changes);
    // console.log(check)
  };

  //reduce vote
  const Reducevote = () => {
    setVotes(votes - 1);
  };
  return (
    <div>
      <section className="article-one">
        <div className="story">
          <h2> {article.title}</h2>
          <img src={article.image} alt="pic" />

          <div className="disc">
            <p>{article.description}</p>
            <a href={article.url} target="_blank">
              {article.url}
            </a>
          </div>

          <div className="author">
            <span>Published Date: {changeDate}</span>
            <span className="name">Author: {article.author}</span>
          </div>

          <div className="likes">
            <div className="heart">
              <button onClick={Add}>
                <i class="fa-solid fa-heart"></i>
              </button>
              <p>{likes}</p>
            </div>

            <div className="heart">
              <button onClick={Addvote}>
                <i class="fa-solid fa-thumbs-up"></i>
              </button>
              <p>{votes} </p>
            </div>

            <div className="heart">
              <button onClick={Reducevote}>
                <i class="fa-solid fa-thumbs-down"></i>
              </button>
              <p> </p>
            </div>

            {/* <div className='heart'>
                <button><i class="fa-solid fa-comment"></i></button>
                <p></p>
              </div> */}
          </div>

          <Form />

        
          {/* <br></br> */}
        </div>

        <section>
          <div className="article">
            {filtered.map((list) => (
              <NavLink
                to={`/article/${list.id}`}
                key={list.id}
                className="links"
              >
                <div className="card">
                  <div className="items">
                    <h3> Author: {list.author} </h3>
                    <h2>{list.title}</h2>
                    <p>{list.description.slice(0, 200)} ...</p>
                  </div>

                  <div className="images">
                    <img src={list.image} alt="pic" />
                  </div>
                </div>
              </NavLink>
            ))}
          </div>
        </section>
      </section>
    </div>
  );
}
