import React from 'react'
import { withRouter } from 'react-router-dom'

import ArticlesList from './articles-list'
import PageNumbers from './page-numbers/'

const ArticlesPage = ({ history }) => {
   
  return (
    <React.Fragment>
      <ArticlesList 
        onItemSelected={(itemId) => {
          history.push(`/articles/${itemId}`)
        }}
      />
      <PageNumbers />
    </React.Fragment> 
  )
}

export default withRouter(ArticlesPage)