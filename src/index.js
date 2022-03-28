import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Index from './components';
import About from './components/about';
import Article from './components/article';
import Articles from './components/articles';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <Router>
    <React.StrictMode>
      <Routes>
        <Route path='/' element= {<App />}>
        <Route index element= {<Index/>}></Route>
          <Route path='about' element={<About/>}></Route>
          <Route path='article' element= {<Articles/>}>
            <Route path=':articleId' element= {<Article/>}></Route>
          </Route>


        </Route>
      </Routes>
    
    </React.StrictMode>,
  </Router>,
  
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
