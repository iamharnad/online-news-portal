import React from 'react'
import { getArticleFromEachCategory } from '../utils'
import ArticleThumbnail from './ArticleThumbnail'

function SideColumn({ news }) {
  
  const articles = getArticleFromEachCategory(news)

  return (
    <div className='side-column-container'>
      {articles.map(article => (
        <ArticleThumbnail
          key={article.id}
          article={article}
          styleType='side'
        />
      ))}
    </div>
  )
}

export default SideColumn