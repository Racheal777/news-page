import React from 'react'
import {data} from '../data'
import '../App.css';
import { NavLink, Outlet } from 'react-router-dom';

export default function Articles() {

    let articles = data()
  return (


    <div>

        <section className='article-main'>
            <h1>Articles</h1>

            <div className='article'>
                {articles.map((item, i) => (

                    <NavLink to={`/article/${item.id}`} key= {item.id} className= "links">
                    <div>
                        <h3>{item.title}</h3>
                        <img src={item.image} alt = "pic"/>
                    </div>
                    </NavLink>
                    
                ))}


            </div>

            <Outlet/>
        </section>
    </div>
  )
}
