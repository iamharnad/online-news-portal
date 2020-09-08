import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { toProperCase } from '../utils'
import SideColumn from './SideColumn'
import Trending from './Trending'
import ArticleThumbnail from './ArticleThumbnail'

function Category({ news }) {
  
  const { category } = useParams()
  const [showReadMore, setShowReadMore] = useState(true)
  const [articles, setArticles] = useState(news[category] ? news[category].slice(0, 3).map(a => ({ category, ...a })) : [])

  useEffect(() => {
    
    if (!articles.length && news[category]) {
      setArticles(news[category].slice(0, 3).map(a => ({ category, ...a })))
    }
  }, [news])

  const handleClick = () => {
    setArticles([...articles, ...news[category].slice(3).map(a => ({ category, ...a }))])
    setShowReadMore(false)
  
  }

  return (
    <div>
      <div id='main-content-side-container'>
        <div>
          <h1>{toProperCase(category)}</h1>
          {articles.map(article => (
            <ArticleThumbnail
              key={article.id}
              article={article}
              styleType='side'
              isCategoryThumbnail={true}
            />
          ))}
          {showReadMore && <button onClick={handleClick}>
            Read more
          </button>}
        </div>
        <SideColumn news={news} />
      </div>
      <Trending news={news} />
    </div>
  )
}

export default Category