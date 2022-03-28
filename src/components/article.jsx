import React from 'react'
import { useParams } from 'react-router-dom'
import {getArticle} from "../data"

export default function Article() {

    let params = useParams()
    let article = getArticle(parseInt(params.articleId, 10))


  return (
    <div>
        <section>
            <div className='story'>
                <h2> {article.title}</h2>
                <img src={article.image} alt = "pic"/>

                <div className='tags'>
                    <p>{article.category}</p>
                    <p>{article.country}</p>
                    <p>{article.source}</p>
                    
                </div>

                <div className='disc'>
                    <p>{article.description}</p>
                    <a href={article.url} target= "_blank">{article.url}</a>

                <br></br>
                <span>{article.published_at}</span>
                <span>Author: {article.author}</span>
                </div>
            </div>
        </section>
    </div>
  )
}
