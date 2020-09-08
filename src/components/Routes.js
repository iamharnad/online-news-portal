import React from 'react'
import { Route } from 'react-router-dom'
import Home from './Home'
import Category from './Category'
import Article from './Article'

function Routes({ news }) {
  
  const routes = [
    { path: '/', component: <Home news={news} /> },
    { path: '/categories/:category', component: <Category news={news} /> },
    { path: '/categories/:category/articles/:articleId', component: <Article news={news} /> }
  ]

  return (
    <div id='content'>
      {routes.map((route, i) => (
        <Route
          key={i}
          exact
          path={route.path}
          render={() => route.component}
        />
      ))}
    </div>
  )
}

export default Routes