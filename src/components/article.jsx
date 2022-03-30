import React from 'react'
import { NavLink, useParams } from 'react-router-dom'
import {getArticle} from "../data"
import {data} from '../data'
import moment from 'moment'

export default function Article() {

    let params = useParams()
    let article = getArticle(parseInt(params.articleId, 10))
    let dates = article.published_at
    let changeDate = moment(dates).format("MMM Do YYYY");  

    //articles data
    let articles = data()
    // console.log(changeDate)

    let filtered = []
    const filteredList = (id) => {
        filtered = articles.filter((list) => list.id !== article.id)

        console.log(filtered);
    }

    filteredList()

    

  return (
    <div>
      <section className='article-one'>
          
        <div className="story">
          <h2> {article.title}</h2>
          <img src={article.image} alt="pic" />

          
          <div className="disc">
            <p>{article.description}</p>
            <a href={article.url} target="_blank">
              {article.url}
            </a>
            </div>

            <div className='author'>
            <span>Published Date: {changeDate}</span>
            <span className='name'>Author: {article.author}</span>
            </div>

            <div className='likes'>
                <button><i class="fa-solid fa-heart"></i></button>
                
                <button><i class="fa-solid fa-thumbs-up"></i></button>
                <button><i class="fa-solid fa-thumbs-down"></i></button>
            </div>
            {/* <br></br> */}
            
          
        </div>
      

      <section>
        <div className='article'>
          {filtered.map((list) => (
            <NavLink to={`/article/${list.id}`} key= {list.id} className= "links">
            <div className='card'>

                <div className='items'>
                <h3> Author: {list.author}  <span>{changeDate}</span></h3>
                <h2>{list.title}</h2>
                <p>{list.description.slice(0,200)} ...</p>
                </div>


                <div className='images'>
                <img src={list.image} alt = "pic"/>
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
