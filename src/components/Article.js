import React, { Fragment } from 'react'
import { useParams, Link } from 'react-router-dom'
import { toProperCase } from '../utils'
import SideColumn from './SideColumn'
import Trending from './Trending'
import moment from 'moment'

function Article({ news }) {
  
  const { category, articleId } = useParams()

  
  const article = news[category] ? news[category].find(a => a.id == articleId) : {}
  const articleText = article.article ? article.article.split('\n') : []

  return (
    <>
      <div id='main-content-side-container'>
        <div>
          <Link to={`/categories/${category}`}>
            Category: {toProperCase(category)}
          </Link>
          <h2>{article.heading}</h2>
          <p>By: {article.author} | {moment(article.time).format('LL')}</p>
          <img src={article.image} alt="" style={{ maxHeight: '300px', margin: '10px 0' }} />
          
          {articleText.map((text, i) => (
            <Fragment key={i}>
              <p className='article-text'>{text}</p>
              <br></br>
            </Fragment>
          ))}
        </div>
        <SideColumn news={news} />
      </div>
      <Trending news={news} />
    </>
  )
}

export default Article