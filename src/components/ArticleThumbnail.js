import React from 'react'
import { Link } from 'react-router-dom'
import { toProperCase } from '../utils'
import moment from 'moment'


function ArticleThumbnail({ article, styleType, isCategoryThumbnail }) {

  return (
    <div className={`article-${styleType}`}>
      <div className='article-thumbnail-image-container'>
        <Link to={`/categories/${article.category}/articles/${article.id}`}>
          <img src={article.image} alt="category" style={{ maxWidth: '100px' }} />
        </Link>
      </div>
      <div className='article-thumbnail-content-container'>
        {
          
          !isCategoryThumbnail && <Link to={`/categories/${article.category}`} className='category-link'>
            {toProperCase(article.category)}
          </Link>
        }
        <p className={isCategoryThumbnail ? 'heading' : ''}>{article.heading}</p>
        {
          
          isCategoryThumbnail && <p>{article.subheading}</p>
        }
        <p>{moment(article.time, 'YYYYMMDD').fromNow()}</p>
      </div>
    </div>
  )
}

export default ArticleThumbnail