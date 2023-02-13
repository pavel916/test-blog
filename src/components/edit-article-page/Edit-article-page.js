import React from 'react'
import { withRouter } from 'react-router-dom'

import EditArticle from './edit-article'

const EditArticlePage = ({ history }) => {
  return (
    <EditArticle 
      onItemSelected={(itemId) => {
        history.push(`/articles/${itemId}`)
      }}
    />
  )
}

export default withRouter(EditArticlePage)