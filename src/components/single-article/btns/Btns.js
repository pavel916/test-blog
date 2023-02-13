import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import * as actions from '../../../redux/actions'

import DeletionModal from './deletion-modal'
import styles from './btns.module.scss'

const Btns = ({ slug, setModal, modal }) => {

  const clickHandler = () => {
    setModal(true)
  }

  return (
    <div className={styles.btns}>
      <button 
        className={styles['delete-btn']}
        type="button"
        onClick={clickHandler}
      >
            Delete
      </button>
      {modal && <DeletionModal />}
      <Link to={`/articles/${slug}/edit`} className={styles['edit-btn']}>
            Edit
      </Link>
    </div>
  )
}

const mapStateToProps = ({ modal }) => {
  return {
    modal,
  }
}

export default connect(mapStateToProps, actions)(Btns)