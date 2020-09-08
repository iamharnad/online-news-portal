import React from 'react'
import { Link } from 'react-router-dom'

function HeroSection({ article }) {

  return (
    <div>
      <h1>Breaking News</h1>
      <Link to={`/categories/${article.category}/articles/${article.id}`}>
        <img src={article.image} alt="breaking news" style={{ minWidth: '500px', maxWidth: '50vw' }} />
      </Link>
      <h2>{article.heading}</h2>
      <p>{article.subheading}</p>
    </div>
  )
}

export default HeroSection